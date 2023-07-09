import React, { useState } from "react";
import Button from "../Button";
import Image from "next/image";
import Modal from "../Modal";

const ThankYou = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const handleClick = () => {
		setIsModalOpen(true);
	};
	return (
		<div className="flex items-center justify-center h-screen  md:w-[628px] md:mx-auto">
			<div className="mx-[49px] flex flex-col items-center">
				<Image
					src={require("../../../assets/fetti.png")}
					alt="fetti"
					className="mb-2 md:mb-[32px] lg:mb-[20px]"
				/>
				<div className="">
					<div className="mb-7 md:mb-[48px] lg:mb[62px]">
						<h1 className="font-[900] text-2xl text-center text-social_icons mb-3 md:text-4xl md:mb-[16px] lg:mb-[20px]">
							Welcome on board!
						</h1>
						<p className="text-center text-gray-900 text-xs md:text-lg lg:font-medium">
							Your submission has been received, we will be in touch and contact
							you soon. Remember to share with your friend and spread the word.
						</p>
					</div>
					<div className="md:w-[208px] md:mx-auto">
						<Button text="Share" handleClick={handleClick} />
					</div>
				</div>
			</div>
			{isModalOpen && <Modal setIsmodalOpen={setIsModalOpen} />}
		</div>
	);
};

export default ThankYou;
