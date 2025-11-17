"use client";
import { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import { eyes } from "@/public";

export default function PlayVideo({ videosrc }: { videosrc: string }) {
	const container = useRef(null);
	const [rotate, setRotate] = useState(0);

	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start end", "end start"],
	});

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			let mouseX = e.clientX;
			let mouseY = e.clientY;

			let deltaX = mouseX - window.innerWidth / 2;
			let deltaY = mouseY - window.innerHeight / 2;

			var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
			setRotate(angle - 180);
		};

		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, []);

	const mq = useTransform(scrollYProgress, [0, 1], [0, -400]);
	
	return (
		<div 
			className="w-full relative overflow-hidden"
			ref={container}
		>
			{/* Background: Solid Yellow */}
			<div className="w-full h-[80vh] bg-yellow-400" />

			{/* Eyes Overlay */}
			<motion.div 
				className="w-full h-[80vh] flex items-center justify-center gap-20 absolute inset-0"
				data-scroll
				data-scroll-speed="-.8"
				data-scroll-section
				style={{ y: mq }}
			>
				{/* First Eye */}
				<div className="w-[200px] h-[200px] sm:w-[150px] sm:h-[150px] xm:w-[100px] xm:h-[100px] relative">
					<Image
						src={eyes}
						alt="Eyes"
						fill
						className="object-contain"
						style={{ rotate: `${rotate}deg` }}
					/>
				</div>
				
				{/* Second Eye */}
				<div className="w-[200px] h-[200px] sm:w-[150px] sm:h-[150px] xm:w-[100px] xm:h-[100px] relative">
					<Image
						src={eyes}
						alt="Eyes"
						fill
						className="object-contain"
						style={{ rotate: `${rotate}deg` }}
					/>
				</div>
			</motion.div>
		</div>
	);
}
