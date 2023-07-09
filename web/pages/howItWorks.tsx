import React from "react";
import Header from "../components/Header";

import { cards, steps } from "../constants/data";
import Step from "../components/landingPage/Step";
import Image from "next/image";
import HowItWorksHeader from "../components/landingPage/HowItWorksHeader";
import HowItWorksCard from "../components/landingPage/HowItWorksCard";

import SocialIcons from "../components/landingPage/SocialIcons";
import Button from "../components/landingPage/Button";
import Emailreceiptor from "../components/landingPage/Emailreceiptor";
import { motion } from "framer-motion";
import Navbar from "../components/landingPage/Navbar";

const howItWorks = () => {
	return (
		<div className="w-full bg-white ">
			<Header title="how it work" />

			<main className="container pt-[32px] md:py-24 lg:py-0 lg:pt-20 md:m-auto ">
				<div
					// viewport={{ once: true, amount: 0.8 }}
					className="mb-[40px] lg:mb-[141px]">
					<HowItWorksHeader
						desc="Qruse  connects verified drivers to Qruse verified passengers "
						role="Passenger"
					/>
				</div>
				<div
					// initial="offscreen"
					// whileInView="onscreen"
					// viewport={{ once: true, amount: 0.8 }}
					className="lg:flex lg:justify-between lg:items-center ">
					<div className="mx-[16px] lg:flex-1 mb-[72px] md:w-[558px] md:mb-[59.64px]">
						{steps.map(step => (
							<Step key={step.id} data={step} />
						))}
					</div>
					<motion.div
						initial={{ opacity: 0, y: 100 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ velocity: 3 }}
						className="ml-[32px] pl-[20px] lg:flex-1   mr-[29px] mb-11 flex justify-center items-center md:mb-[39px]">
						<Image
							className="md:w-[454px] 2xl:h-[813px]"
							src={require("../assets/iPhone_11_Pro_Max.png")}
							alt="iphone 11 pro max"
						/>
					</motion.div>
				</div>
				<motion.div
					initial={{ opacity: 0, y: 100 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ velocity: 3 }}
					className="mx-[15px] mb-[40.63px] md:flex md:justify-center md:mb-[39px] lg:mb-[135px]">
					<Image
						src={require("../assets/QRUSE_BRAND_ADS.png")}
						alt="ads"
						className="md:w-[753px] lg:w-[1000px] 2xl:h-[843px]"
					/>
				</motion.div>
				<div className="mb-[22px] h-full md:hidden ">
					<HowItWorksHeader
						desc="Qruse  connects verified Passengers to verified drivers"
						role="Car Owners"
					/>
				</div>
				<motion.div
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ velocity: 3 }}
					className="mb-[52px] py-9 md:w-full   lg:mx-auto rounded-[20px] "
					style={{ backgroundColor: "rgba(206, 221, 250, 0.21)" }}>
					<div className="mb-[22px] h-full hidden lg:block lg:mb-[73px]">
						<HowItWorksHeader
							desc="Qruse  connects verified Passengers to verified drivers"
							role="Car Owners"
						/>
					</div>
					<motion.div
						initial="offscreen"
						whileInView="onscreen"
						viewport={{ once: true, amount: 0.8 }}
						className="md:flex md:flex-wrap mx-12 lg:mx-0 gap-4 lg:gap-[29px] justify-center ">
						{cards.map((card: any) => (
							<HowItWorksCard
								key={card.id}
								title={card.title}
								desc={card.desc}
								Icon={card.Icon}
							/>
						))}
					</motion.div>
				</motion.div>
				<div className=" lg:px-[100px] lg:py-[80px]">
					<motion.div
						initial={{ opacity: 0, y: 100 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ velocity: 3 }}
						className="mb-[62px] mx-5 md:mx-[40px] md:w-[426px] md:flex  md:mb-[89.92px] lg:m-0 lg:w-full  lg:justify-between items-center  lg:mb-[82px]">
						<div className="mb-[34px] md:mr-[132px]">
							<Image
								className="w-[63.4px] md:w-[90px] mb-2 md:mb-4"
								src={require("../assets/brand.png")}
								alt="Brand"
							/>
							<h3 className="text-xs font-medium capitalize text-gray-700 md:font-medium md:text-sm lg:text-[16px]">
								earn, share and make friends
							</h3>
						</div>
						<div className="text-gray-500 font-normal text-sm lg:flex lg:gap-[60px] lg:font-semibold lg:text-[16px]">
							<p className="mb-3 md:mb-4">How it works</p>
							<p className="">Sign Up</p>
						</div>
						<div className="hidden lg:block justify-between">
							<Emailreceiptor />
						</div>
					</motion.div>

					<div className="mb-[76px] mx-[42px] md:max-w-[659px] md:mx-auto">
						<motion.div
							initial={{ opacity: 0, y: 100 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ velocity: 3 }}
							className="mb-[56px] md:max-w-[356px] md:mx-auto lg:hidden">
							<Emailreceiptor />
							<motion.div
								initial={{ x: -100 }}
								whileInView={{ x: 0 }}
								transition={{ velocity: 3 }}
								className="flex justify-center items-center">
								<SocialIcons />
							</motion.div>
						</motion.div>
						<div className="">
							<motion.p
								initial={{ opacity: 0, y: 100 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ velocity: 3 }}
								className="mb-6 font-semibold text-gray-700 text-center capitalize text-xs md:text-sm md:font-semibold md:mb-[16px] lg:mb-4 lg:text-16">
								<span className="text-social_icons">
									{" "}
									{`join the waitlist `}
								</span>
								to be the first set of people to experience the app, as lots of
								freebies and discount would be given for the first few weeks
							</motion.p>
							<motion.div
								initial={{ opacity: 0, y: 100 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ velocity: 3 }}
								className="px-[28.5px] md:w-fit md:mx-auto sm:mb-9 bg-white">
								<Button text="Join Waitlist" link="waitList" />
							</motion.div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};

export default howItWorks;
