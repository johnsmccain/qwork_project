import Link from "next/link";
import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import Button from "./Button";

const MobileNavbar = ({ handleClick }: any) => {
	return (
		<div className="px-5 py-10 md:px-7 md:py-16 sm:px-5 sm:py-[36px]">
			<div className="flex justify-end mb-[26px] md:mb-[30px] sm:mb-[26px]">
				<button onClick={() => handleClick(false)}>
					<MdOutlineCancel className="text-[24px] text-black" />
				</button>
			</div>
			<div className="">
				<div className=" flex flex-col text-xs text-gray-700">
					<Link
						href="/"
						className="mb-4 md:mb-6 sm:mb-4"
						onClick={() => handleClick(false)}>
						Home
					</Link>
					<Link
						className="mb-4 md:mb-6 sm:mb-[24px]"
						onClick={() => handleClick(false)}
						href="/howItWorks">
						How it works
					</Link>
				</div>
				<div className="" onClick={() => handleClick(false)}>
					<Button text="Join Waitlist" link="waitList" />
				</div>
			</div>
		</div>
	);
};

export default MobileNavbar;
