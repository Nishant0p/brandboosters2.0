import type { NextApiRequest, NextApiResponse } from 'next';

// Utility to safely coerce values to strings
const asString = (v: unknown, fallback = ''): string => {
  if (typeof v === 'string') return v.trim();
  if (v == null) return fallback;
  try { return String(v).trim(); } catch { return fallback; }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const name = asString(req.body?.name);
  const company = asString(req.body?.company);
  const goal = asString(req.body?.goal);
  const email = asString(req.body?.email);
  const budget = asString(req.body?.budget);
  const message = asString(req.body?.message);

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required' });
  }

  const embed = {
    title: 'New Contact Form Submission',
    color: 0x00ff00,
    fields: [
      { name: 'Name', value: name, inline: true },
      { name: 'Email', value: email, inline: true },
      { name: 'Company', value: company || 'Not provided', inline: true },
      { name: 'Looking For', value: goal || 'Not specified', inline: true },
      { name: 'Budget', value: budget || 'Not specified', inline: true },
      { name: 'Message', value: message || 'No message provided' },
    ],
    timestamp: new Date().toISOString(),
  };

  const botToken = process.env.DISCORD_BOT_TOKEN;
  const channelId = process.env.DISCORD_CHANNEL_ID;
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

  let via: 'bot' | 'webhook' | 'none' = 'none';
  try {
    if (botToken && channelId) {
      // Prefer bot token flow when configured
      const apiUrl = `https://discord.com/api/v10/channels/${channelId}/messages`;
      via = 'bot';
      const resp = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bot ${botToken}`,
        },
        body: JSON.stringify({
          content: `New contact: ${name} <${email}>${company ? ` from ${company}` : ''}`,
          embeds: [embed],
        }),
      });

      if (!resp.ok) {
        const text = await resp.text();
        throw new Error(`Discord bot send failed: ${resp.status} ${text}`);
      }
      return res.status(200).json({ success: true, via: 'bot' });
    }

    if (webhookUrl) {
      // Fallback to webhook URL if provided
      via = 'webhook';
      const resp = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          content: `New contact: ${name} <${email}>${company ? ` from ${company}` : ''}`,
          embeds: [embed],
        }),
      });

      if (!resp.ok) {
        const text = await resp.text();
        throw new Error(`Discord webhook failed: ${resp.status} ${text}`);
      }
      return res.status(200).json({ success: true, via: 'webhook' });
    }

    // Neither configured
    return res.status(500).json({ error: 'Server configuration error: missing DISCORD_BOT_TOKEN + DISCORD_CHANNEL_ID or DISCORD_WEBHOOK_URL', via: 'none' });
  } catch (error) {
    const msg = error instanceof Error ? error.message : 'Unknown error';
    console.error('Error sending message to Discord:', msg);
    return res.status(500).json({ error: 'Failed to send message', detail: msg, via });
  }
}
