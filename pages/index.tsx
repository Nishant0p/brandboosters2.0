"use client";
import { useEffect } from "react";
import Head from "next/head";
import { Curve, Marquee, Ready } from "@/components";
import { About, Clients, Hero, Projects, VideoHome } from "@/container";

export default function Home() {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			const locomotiveScroll = new LocomotiveScroll();
		})();
	}, []);

	return (
		<>
			<Head>
				<title>brandboosters marketing agency</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<Curve backgroundColor={"#FAF7F2"}>
				<Hero />
				<div className="w-full bg-marquee z-10 relative rounded-t-[20px] padding-y">
					<Marquee
						title="we are brandboosters"
						className="pb-[50px] lg:pb-[40px] md:pb-[30px] sm:pb-[20px] xm:pb-[15px] text-[540px] leading-[330px] lg:text-[380px] lg:leading-[240px] md:text-[300px] md:leading-[160px] sm:text-[230px] sm:leading-[140px] xm:text-[130px] xm:leading-[80px]"
					/>
				</div>
				<About />
				<VideoHome />
				<Projects />
				<Clients />
				<Ready />
			</Curve>
		</>
	);
}
