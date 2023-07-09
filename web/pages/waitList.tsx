import React, { useState } from "react";
import Navbar from "../components/landingPage/Navbar";
import Header from "../components/Header";
import Button from "../components/landingPage/Button";
import Form from "../components/landingPage/Form";
import Image from "next/image";
import ThankYou from "../components/landingPage/screen/ThankYou";
import { toastify } from "../components/Toaster";
import { motion } from "framer-motion";
const btnStyle =
	"py-1 px-[22px] md:px-[13.5px] md:px-[6.5px]  rounded text-[16px] md:font-bold ";
const activeBtnStyle = "bg-mainColor text-white";
const inActiveBtnStyle = "text-gray-500";
const waitList = () => {
	const [activeBtn, setActiveBtn] = useState("passenger");
	const [status, setStatus] = useState(false);
	const [loading, setLoading] = useState(false);
	const [errorMsg, setErrorMsg] = useState("");
	// const [loading, setLoading] = useState(false)
	const handleSubmit = async (e: any, role: any) => {
		e.preventDefault();
		const data = {
			role,
			name: e.target[0].value,
			phone: e.target[1].value,
			email: e.target[2].value,
		};
		setLoading(true);
		setErrorMsg("");
		const res = await fetch("/api/users/create", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});
		// console.log(res);
		if (res.status === 201) {
			setLoading(false);
			toastify("We have received your information!");
			setStatus(true);
		}
		if (res.status === 203) {
			setLoading(false);
			console.log(res);
			setErrorMsg("Email already waitlisted!");
			toastify("Email already waitlisted!");
		}
		if (res.status === 500) {
			setLoading(false);
			console.log(res);
			setErrorMsg("Server Error!");
			toastify("Please check your network!");
		}
	};
	return (
		<div className="bg-white h-full">
			{!status ? (
				<div className=" w-full h-full  bg-white lg:mb-4">
					<Header title="waitlist" />

					<main className=" w-full pt-[62px] md:pt-[70px]  bg-white">
						<div className="w-full mb-10 container p-[14px] md:mb-5 md:w-[476px] md:mx-auto lg:w-[635px]">
							<p className="text-center text-xl capitalize font-normal md:text-2xl text-black">
								In anticipation of product launch,{" "}
								<span className="text-social_icons">Join The Waitlist</span>
							</p>
						</div>
						<div className="p-[14px] flex justify-center items-center mb-[72px] md:mb-6">
							<motion.div
								initial={{}}
								className="gap-1 flex justify-center items-center bg-gray-50 w-fit p-[6px] md:p-2 rounded transition-all">
								<motion.button
									whileTap={{ scaleX: 0.9 }}
									animate={{}}
									onClick={() => setActiveBtn("passenger")}
									className={`${btnStyle}  ${
										activeBtn === "passenger"
											? activeBtnStyle
											: inActiveBtnStyle
									}`}>
									Passenger
								</motion.button>
								<motion.button
									whileTap={{ scaleX: 0.9 }}
									onClick={() => setActiveBtn("driver")}
									className={`${btnStyle} ${
										activeBtn === "driver" ? activeBtnStyle : inActiveBtnStyle
									}`}>
									Qruse Driver
								</motion.button>
							</motion.div>
						</div>
						<div className="mb-2">
							{activeBtn === "passenger" ? (
								<Form
									role="passenger"
									setStart={setStatus}
									handleSubmit={handleSubmit}
									loading={loading}
									status={errorMsg}
								/>
							) : (
								<Form
									role="driver"
									loading={loading}
									setStart={setStatus}
									handleSubmit={handleSubmit}
									status={errorMsg}
								/>
							)}
						</div>
						{/* <div className="w-full">jhjdhfjs</div> */}
					</main>
				</div>
			) : (
				<div className="absolute top-0 bottom-0 left-0 right-0 bg-white ">
					<div className="relative">
						<ThankYou />
					</div>
				</div>
			)}
		</div>
	);
};

export default waitList;
