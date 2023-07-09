import Link from "next/link";
import React from "react";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
const iconStyle = "text-[25px] md:text-[32px] md:w-[40px] md:h-[40px] p-1";
const SocialIcons = ({ position }: any) => {
	return (
		<div
			className={`flex min-w-[128px] md:w-[260px] gap-[16px] md:gap-5 text-social_icons  ${
				position === "center" && "justify-center"
			}`}>
			<Link href="" className="rounded-full border-blue-500 border-2 ">
				<AiFillInstagram className={iconStyle} />
			</Link>
			<Link href="" className="rounded-full border-blue-500 border-2">
				<AiOutlineTwitter className={iconStyle} />
			</Link>
			<Link href="" className="rounded-full border-blue-500 border-2">
				<FaFacebookF className={iconStyle} />
			</Link>
		</div>
	);
};

export default SocialIcons;
