import Image from "next/image";
import React, { useRef } from "react";
import { BiCopy } from "react-icons/bi";
// import {} from "react-copy-to-clipboard";
import useCopyToClipboard from "./CopyPaste";
import { toastify } from "../Toaster";
import { BsFacebook, BsLinkedin, BsTwitter, BsWhatsapp } from "react-icons/bs";
const iconWrapper =
	"p-[14px] bg-[#CEDDFA]  rounded-full mb-[15px] w-[53px] h-[54px] md:w-[107px] md:h-[107px] flex items-center justify-center md:mb-[14px]  lg:h-[92px] lg:w-[92px] lg:mb-[17px]";
const iconImage = "w-[25px] md:w-[47px] md:h-[47px] lg:h-[40px] lg:w-[40px]  ";
const iconName = "text-[9px] text-center md:text-[16px] md:font-normal lg";
const link = "w-fit";
const Modal = ({ setIsmodalOpen }: any) => {
	const [value, copy] = useCopyToClipboard();
	const inputRef = useRef<any>();
	return (
		<div className="absolute top-0 left-0 bottom-0 right-0 flex items-center justify-center md:w-full bg-black bg-opacity-20 ">
			<div className="mx-4 bg-white w-full rounded-lg p-[22px] md:w-[728px] md:px-[41px] lg:w-[824px] lg:p-[32px] lg:px-[88px] z-50">
				<h2 className="mb-2 font-[900] text-xl text-center md:font-bold md:text-[25px] md:mb-[14px] lg:mt-[30px] lg:mb-[16px]">
					Share
				</h2>
				<p className=" text-[10px] font-medium text-center mb-6 md:text-[16px] md:mb-[32px] lg:mb-3">
					Tell with your friends about Qruse and spread the word.
				</p>
				<div className="flex justify-between lg:justify-evenly mb-[65px] md:w-[513px] md:mx-auto lg:mb-[27px] lg:gap-6  ">
					<div className={link}>
						<div className={iconWrapper}>
							{/* <Image
								src={require("../../assets/facebook.png")}
								className={iconImage}
								alt=""
							/> */}
							<BsFacebook className="text-[#19AFFF] w-[32px] h-[34px]" />
							{/* 0062E0 */}
						</div>
						<p className="text-[9px] text-center md:text-[16px] md:font-normal">
							Facebook
						</p>
					</div>
					<div className={link}>
						<div className={iconWrapper}>
							{/* <Image
								src={require("../../assets/linkin.png")}
								className={iconImage}
								alt=""
							/> */}
							<BsLinkedin className="text-[#0D64C2] w-[32px] h-[34px]" />
						</div>
						<p className={iconName}>LinkIn</p>
					</div>
					<div className={link}>
						<div className={iconWrapper}>
							{/* <Image
								src={require("../../assets/twitter.png")}
								className={iconImage}
								alt=""
							/> */}
							<BsTwitter className="text-[#1D9BF0] w-[32px] h-[34px]" />
						</div>
						<p className={iconName}>Twitter</p>
					</div>
					<div className={link}>
						<div className={iconWrapper}>
							{/* <Image
								src={require("../../assets/whatsapp.png")}
								className={iconImage}
								alt=""
							/> */}
							<BsWhatsapp className="text-[#37C734] w-[32px] h-[34px]" />
						</div>
						<p className={iconName}>Whatsapp</p>
					</div>
				</div>
				<div className="w-full flex py-4  items-center bg-[#F8F8F8] rounded pl-[17px] pr-[8px] md:mb-10 md:pl-[54px]">
					<input
						readOnly
						className="text-[12px] w-full text-gray-400 bg-[#F8F8F8] font-semibold md:font-medium md:text-[16px]  outline-none"
						value={"https://www.qruse.io"}
						ref={inputRef}
					/>
					<div
						className=""
						onClick={() => {
							copy(inputRef.current.value);
							toastify("copied to clipboard!");
						}}>
						<BiCopy className="text-2xl text-gray-500 md:text-[36px] md:mr-[13px]" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
