import React from "react";
import { motion } from "framer-motion";
const HowItWorksHeader = ({ desc, role }: any) => {
	return (
		<div className="mx-10 flex flex-col items-center ">
			<div
				// initial={{ opacity: 0, y: -100 }}
				// animate={{ opacity: 1, y: 0 }}
				// transition={{ velocity: 3 }}
				className="flex flex-col items-center mb-4 md:mb-[32px]">
				<h2 className="text-center  font-semibold capitalize text-l20 md:text-l28 lg:text-32 lg:mb-[10px]  px-[39px] md:font-medium mb-1 text-black">
					How <span className="text-social_icons">Qruse</span>{" "}
					{`works for
					${role}`}
				</h2>
				<div className="w-[157px] h-[4px] rounded-t-lg md:rounded-t-[16px] bg-mainColor2  md:w-[293px] md:h-[4px]"></div>
			</div>
			<p
				// initial={{ opacity: 0, y: 100 }}
				// animate={{ opacity: 1, y: 0 }}
				// transition={{ velocity: 3 }}
				className="text-gray-500 capitalize text-16 text-center p-1 font-normal md:text-[16px] md:font-[400] lg:text-l20">
				{desc}
			</p>
		</div>
	);
};

export default HowItWorksHeader;
