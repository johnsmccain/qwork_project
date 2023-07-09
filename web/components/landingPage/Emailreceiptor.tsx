import React, { useRef, useState } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { toastify } from "../Toaster";

const Emailreceiptor = () => {
	const emailRef = useRef<any>();

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		const data = {
			email: e.target[0].value,
		};
		console.log(data);
		const res = await fetch("/api/emails", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});
		// console.log(res);
		if (res.status === 201) {
			toastify("Email received, Thank you!");
		}
		if (res.status === 203) {
			console.log(res);
			toastify("Email already Added!");
		}
		if (res.status === 500) {
			console.log(res);
			toastify("Please check your network!");
		}
		if (res.status === 400) {
			console.log(res);
			toastify("Enter email pls!");
		}
	};
	return (
		<div>
			<h2 className="text-gray-800 capitalize font-semibold text-sm mb-3 md:text-[16px] md:font-medium lg:text-xl">
				receive newsletter
			</h2>
			<form onSubmit={(e: any) => handleSubmit(e)}>
				<div className="mb-[47px] flex py-3 px-4 border-[1px] rounded items-center justify-center lg:py-[12px]">
					<input
						type="email"
						className="w-full outline-none bg-white text-gray-400"
						placeholder="Enter Email"
						required
						// onClick={(e: any) => setEmail(e.target.value)}
						// ref={emailRef}
					/>
					<button>
						<BsFillArrowRightCircleFill className="text-gray-400 text-2xlg" />
					</button>
				</div>
			</form>
		</div>
	);
};

export default Emailreceiptor;
