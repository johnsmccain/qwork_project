import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import logo from "../assets/brand.png";
import Navbar from "../components/landingPage/Navbar";
import { BsDashLg } from "react-icons/bs";

import SocialIcons from "../components/landingPage/SocialIcons";
import Button from "../components/landingPage/Button";
import Header from "../components/Header";
import { motion } from "framer-motion";
export default function Home() {
	// useEffect(() => {
	// 	(async () => {
	// 		const res = await fetch("/api/hello");
	// 		console.log(res);
	// 	})();
	// }, []);

	return (
		<div className="w-full h-fit flex justify-center  bg-lighBlue ">
			<Header title="Home" />
			<div className=" w-full  bg-lighBlue">
				<main className=" lg:flex items-center  relative  gap-[27px] max-w-[1443px] lg:h-full m-auto">
					<div className="p-[14px] pt-[62px] md:p-0  md:w-[634px] mx-auto  flex-1 items-center">
						<div className=" md:w-[500px] md:m-auto lg:ml-[62px]">
							<motion.div
								initial={{ y: -100, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								className="p-2 flex items-center justify-center
						lg:justify-start mb-[28px] md:mb-6 md:font-[900]  ">
								<BsDashLg />
								<h1 className="text-[14px] text-primary md:text-xl lg:text-35 lg:ml-1">
									Launching soon!
								</h1>
							</motion.div>
							<motion.p
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								className="text-[20px] text-primary mb-[28px] md:mb-[48px] text-center md:font-normal md:text-[32px]
							lg:w-[495px] lg:text-25 lg:font-normal lg:text-left">
								Find a safe ride, drive and earn. make more friends while
								sharing your ride.
							</motion.p>
							<motion.div
								initial={{ x: -100, opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								className="md:px-[100px] lg:p-0 lg:w-fit">
								<Button text="Join Waitlist" link="waitList" />
							</motion.div>
						</div>
					</div>
					<motion.div
						initial={{ opacity: 0, y: 100 }}
						animate={{ opacity: 1, y: 0 }}
						className="m-[14px] mr-0 md:m-0 md:ml-[41px] flex-3 z-20">
						{/* <Image
							src={require("../assets/Group 644.png")}
							className="w-full lg:hidden"
							alt="banner"
						/> */}
						<Image
							src={require("../assets/phone_app.png")}
							className="w-full lg:min-h-[500px] lg:h-[700px] object-scale-down"
							alt="banner"
						/>
					</motion.div>
					<motion.div
						initial={{ x: -100 }}
						whileInView={{ x: 0 }}
						transition={{ velocity: 3 }}
						className="m-[14px] lg:absolute lg:bottom-0 mb-[56px] lg:ml-[62px]">
						<SocialIcons />
					</motion.div>
				</main>

				{/* <footer className="">
					<div className="">Qruse @copyright {new Date().getFullYear()}</div>
				</footer> */}
			</div>
		</div>
	);
}
