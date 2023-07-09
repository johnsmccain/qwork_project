import React, { useState } from "react";
import Button from "./Button";
import Toaster from "../Toaster";

const inputStyle =
	"w-full bg-white text-gray-500 py-3 px-4 outline-none mb-5 md:mb-[32px]";
const Form = ({ role, handleSubmit, status, loading }: any) => {
	return (
		<div className="mx-[33px] bg-gray-50 rounded py-[38px] md:w-[560px] md:m-auto md:px-[50px] md:py-[35px]">
			<form
				action=""
				className=" mx-[12px] "
				onSubmit={e => handleSubmit(e, role)}>
				<h2 className="font-bold text-[16px] text-social_icons text-center mb-5 md:text-[25px]">
					Sign Up
				</h2>

				<div className="mb-5 md:mb-16">
					<input
						type="text"
						className={`${inputStyle}`}
						required
						// onChange={e => setName(e.target.value)}
						placeholder="Full Name"
					/>

					<input
						type="tel"
						className={`${inputStyle}`}
						// onChange={e => setPhone(e.target.value)}
						required
						placeholder="Phone Number"
					/>

					<input
						type="email"
						className={`${inputStyle}`}
						// onChange={e => setEmail(e.target.value)}
						required
						placeholder="Email Address"
					/>
					{status && (
						<label htmlFor="" className="text-red-700 text-center italic ">
							{status}
						</label>
					)}
				</div>
				<div className="md:w-[208px] md:m-auto">
					<Button
						text={loading ? "Loading..." : "Submit"}
						type="submit"
						loading={loading}
					/>
				</div>
				{/* {status && (
					<label htmlFor="" className="text-red-700 text-center italic ">
						{status}
					</label>
				)} */}
			</form>
		</div>
	);
};

export default Form;
