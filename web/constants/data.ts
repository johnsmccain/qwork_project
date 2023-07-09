import { MdEditSquare } from "react-icons/md";
import { FaCar, FaRoute } from "react-icons/fa";
import { IoWallet } from "react-icons/io5";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
export const steps = [
	{
		id: 1,
		action: "Sign Up",
		desc: "by clicking the sign-up , you would be required to input some important details . after filling those details , you can then proceed to schedule a ride",
	},
	{
		id: 2,
		action: "Schedule or start a Ride",
		desc: "you can either schedule or decide to start a ride instantly  by checking drivers close to your location and heading to your preferred destination. ",
	},
	{
		id: 3,
		action: "Select Preferred Driver",
		desc: "you have the opportunity to select your preffered driver as far the driver indicates availability in his vehicle.",
	},
	{
		id: 4,
		action: "End Ride and Pay",
		desc: "once you get to your destination , you end the ride and pay the assigned amount.",
	},
];
export const cards = [
	{
		id: 1,
		title: "Sign Up",
		desc: "By clicking the sign-up , you would be required to input some important details. after filling those details, you can then post about your availability.",
		Icon: MdEditSquare,
	},
	{
		id: 2,
		title: "Post on Availability",
		desc: "As a car owner you are opportune to post on your availability, if seats are available for a ride or not.",
		Icon: FaCar,
	},
	{
		id: 3,
		title: "Pick Passenger",
		desc: "Once you get to your destination , you end the ride and you would be credited  the assigned amount.",
		Icon: FaRoute,
	},
	{
		id: 4,
		title: "Earn",
		desc: "If seats are available , you can onboard verified Qruse users and take them to their destination by indicating via the app",
		Icon: IoWallet,
	},
];
