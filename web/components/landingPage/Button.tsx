import Link from "next/link";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
const notify = (text: String) => toast("Wow so easy!");

// lg:px-[48px] lg:py-[16px]
const btn = `px-[48px] py-[16px] md:py-[10px] md:px-[20px] bg-mainColor text-white w-full rounded-lg text-b16 font-semibold gap-[28]   md:font-semibold md:text-14`;
const Button = ({ text, link, handleClick, type, loading, size }: any) => {
	if (link) {
		return (
			<Link href={`/${link}`} className={`${btn} block text-center`}>
				{text}
			</Link>
		);
	}
	if (type) {
		<motion.button
			whileTap={{ scaleX: 0.9 }}
			className={btn}
			type={type}
			disabled={loading}>
			{text}
		</motion.button>;
	}
	return (
		<motion.button
			whileTap={{ scaleX: 0.9 }}
			className={btn}
			onClick={handleClick}>
			{text}
		</motion.button>
	);
};

export default Button;
