import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Here you would typically save the onboarding data to a database
    // For now, we'll just log it and return a success response
    console.log('Onboarding data received:', req.body);
    
    // Set a cookie or session to indicate onboarding is complete
    res.setHeader('Set-Cookie', 'onboardingComplete=true; Path=/; HttpOnly');
    
    return res.status(200).json({ success: true });
  }

  // Handle any non-POST requests
  res.setHeader('Allow', ['POST']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
