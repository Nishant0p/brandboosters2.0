import { TMarqueeProps } from "@/types";
import { TextMarquee } from "@/animation";

export default function Marquee({ title, className }: TMarqueeProps) {
	return (
		<TextMarquee baseVelocity="0.7">
			<h1
				className={`font-FoundersGrotesk bg-yellow-400 font-normal border-y border-[#0D1B2A33] uppercase text-[#0D1B2A] whitespace-nowrap tracking-[-5px] ${className}`}>
				{title} &nbsp;
			</h1>
			<h1
				className={`font-FoundersGrotesk bg-yellow-400 font-normal border-y border-[#0D1B2A33] uppercase text-[#0D1B2A] whitespace-nowrap tracking-[-5px] ${className}`}>
				{title} &nbsp;
			</h1>
		</TextMarquee>
	);
}
