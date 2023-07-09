import Link from "next/link";
import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import { motion, useScroll } from "framer-motion";
import "intersection-observer";

const Step = ({ data }: any) => {
	return (
		<motion.div
			initial={{ opacity: 0, x: -100 }}
			whileInView={{ opacity: 1, x: 0 }}
			transition={{ velocity: 3 }}
			className="mb-[36px]">
			<div className="mb-3 md:mb-8 ">
				<Link
					href={""}
					className="bg-mainColor4 rounded py-[4px] px-[16px] my-2 block w-fit text-[#F8F8F8] font-semibold text-14 md:py-[8px] md:text-xl md:font-medium lg:gap-5">
					{data.action}
				</Link>
			</div>
			<div className="flex justify-between items-center">
				<div
					className="mr-[24px] h-[28px] w-[28px] md:h-[26px] md:w-[26px]  border-gray-300
								border-[1px] rounded-full p-1 flex items-center justify-center ">
					<AiOutlineArrowDown
						className="text-xl font-extrabold text-social_icons
								 "
					/>
				</div>
				<div className="">
					<p
						className="text-gray-500 capitalize text-12 font-normal md:text-xl md:text-left lg:text-[16px] "
						// style={{ lineHeight: "25.6px" }}
					>
						{data.desc}
					</p>
				</div>
			</div>
		</motion.div>
	);
};

export default Step;
