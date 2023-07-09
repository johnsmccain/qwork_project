import React from "react";
import { motion } from "framer-motion";
const HowItWorksCard = ({ desc, title, Icon }: any) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 100 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ velocity: 3 }}
			className="flex flex-col items-center bg-white px-7 py-[22px] mb-4 rounded lg:rounded-lg md:min-w-[367px] md:w-[367px] md:px-[72px] lg:min-w-[250px]  lg:max-w-[283px] lg:w-full lg:h-[350px] lg:px-[35px] lg:py-[30px]">
			<div className="bg-mainDeepColor w-fit p-[14px] rounded-full flex justify-center items-center mb-[30px] md:mb-[32px] md:w-[63px] md:h-[63px] lg:mb-6">
				<Icon className="text-white text-2xl md:text-[32px]" />
			</div>
			<div className="">
				<h2 className="text-center mb-3 text-[16px]  font-bold md:text-xl md:mb-[23px]lg:mb-[24px] lg:text-2xl lg:font-bold text-gray-800">
					{title}{" "}
				</h2>

				<p className="text-center font-normal text-sm text-gray-500 md:text-lg lg:text-16">
					{desc}
				</p>
			</div>
		</motion.div>
	);
};

export default HowItWorksCard;
