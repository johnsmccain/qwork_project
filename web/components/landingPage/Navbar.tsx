import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import MobileNavbar from "./MobileNavbar";
import Button from "./Button";
import { useRouter } from "next/router";

const Navbar = () => {
	const router = useRouter();
	const [isOpen, setIsOpen] = useState<Boolean>(false);
	const [activeLink, setActiveLink] = useState(router.pathname);
	// const [activeLink, setActiveLink] = useState("home");

	const handleClick = (option: Boolean) => {
		setIsOpen(option);
	};
	// console.log(router.pathname.split("/"));
	useEffect(() => {
		setActiveLink(router.pathname);
		return () => {};
	}, [router.pathname]);

	// setActiveLink();
	console.log(activeLink);

	return (
		<div
			className={`${
				activeLink === "/" ? "bg-lighBlue" : "bg-white"
			} z-50 lg:bg-white mb-0`}>
			<nav
				className={`container pt-2  flex items-center w-full  mx-auto lg:py-0  lg:h-[70px] `}>
				<div className="flex justify-between px-4 pt-3 lg:py-10 w-full items-center ">
					<Link href="/" onClick={() => setActiveLink("/")}>
						<Image
							src={require("../../assets/brand.png")}
							className="w-[75px] md:w-[80px]"
							alt="Brand name"
						/>
					</Link>
					<div className="lg:flex gap-[80px] hidden text-[14px] text-gray-700 font-semibold">
						<Link
							onClick={() => setActiveLink((prev: string) => (prev = "/"))}
							href="/"
							className={`${activeLink === "/" && "text-social_icons"}`}>
							Home
						</Link>
						<Link
							onClick={() =>
								setActiveLink((prev: string) => (prev = "howitworks"))
							}
							href="/howItWorks"
							className={`${
								activeLink === "/howItWorks" && "text-social_icons"
							}`}>
							How It Works
						</Link>
					</div>
					<div className="lg:flex hidden" onClick={() => setActiveLink("")}>
						<Button text="Join Waitlist" link="/waitList" />
					</div>
					<button
						className="p-1  rounded lg:hidden"
						onClick={() => {
							handleClick(true);
						}}>
						<AiOutlineMenu className="text-xl text-black" />
					</button>

					{/* <div
					className={`absolute right-0 top-0 bg-white lg:hidden opacity-0 z-50 rounded-md transition-all ${
						isOpen && "w-52 opacity-100 "
					}`}>
					<MobileNavbar handleClick={handleClick} />
				</div> */}

					{isOpen && (
						<div
							className="fixed transition-all right-0 top-0  lg:hidden  z-50 rounded-md  left-0 bottom-0 flex flex-col items-end bg-opacity-20 bg-black"
							// style={{ backgroundColor: "red" }}
						>
							<div className="bg-white w-60 md:w-[411px] sm:w-[188px] rounded-md">
								<MobileNavbar
									handleClick={handleClick}
									setActiveLink={setActiveLink}
								/>
							</div>
						</div>
					)}
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
