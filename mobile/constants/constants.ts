import { Bookings, Calender, Home, Inbox, Profile } from "../screens";

const register_options = [
	{
		id: 0,
		label: "CLIENT",
	},
	{
		id: 1,
		label: "WORKER",
	},
];

const walkthrough = [
	{
		id: 0,
		title: "Explore",
		sub_title: "We provide professional service at a friendly price.",
		image: require("../assets/images/work.png"),
	},
	{
		id: 1,
		title: "Explore More",
		sub_title: "The best results and your satisfaction is our top priority.",
		image: require("../assets/images/work.png"),
	},
	{
		id: 2,
		title: "Explore Online",
		sub_title: "Let's make awesome changes to your home.",
		image: require("../assets/images/work.png"),
	},
];

const categories = [
	{
		id: 0,
		label: "Cleaning",
		icon: require("../assets/icons/mobile.png"),
	},
	{
		id: 1,
		label: "Repairing",
		icon: require("../assets/icons/model_3d.png"),
	},
	{
		id: 2,
		label: "Painting",
		icon: require("../assets/icons/web_design.png"),
	},
	{
		id: 3,
		label: "Laundry",
		icon: require("../assets/icons/illustration.png"),
	},
	{
		id: 4,
		label: "Appliance",
		icon: require("../assets/icons/drawing.png"),
	},
	{
		id: 5,
		label: "Plumbing",
		icon: require("../assets/icons/animation.png"),
	},
	{
		id: 6,
		label: "Shifting",
		icon: require("../assets/icons/education.png"),
	},
	{
		id: 7,
		label: "Beauty",
		icon: require("../assets/icons/networking.png"),
	},
	{
		id: 8,
		label: "AC Repairing",
		icon: require("../assets/icons/coding.png"),
	},
	{
		id: 9,
		label: "Vehicle",
		icon: require("../assets/icons/coding.png"),
	},
	{
		id: 10,
		label: "Electronics",
		icon: require("../assets/icons/coding.png"),
	},
	{
		id: 11,
		label: "Massage",
		icon: require("../assets/icons/coding.png"),
	},
	{
		id: 12,
		label: "Men's Salon",
		icon: require("../assets/icons/coding.png"),
	},
];

const screens = {
	home: "Home",
	bookings: "Bookings",
	calender: "Calender",
	inbox: "Inbox",
	profile: "Profile",
};

const bottom_tabs = [
	{
		id: 0,
		label: screens.home,
		icon: require("../assets/icons/home.png"),
		component: Home,
	},
	{
		id: 1,
		label: screens.bookings,
		icon: require("../assets/icons/search.png"),
		component: Bookings,
	},
	{
		id: 2,
		label: screens.calender,
		icon: require("../assets/icons/profile.png"),
		component: Calender,
	},
	{
		id: 3,
		label: screens.inbox,
		icon: require("../assets/icons/profile.png"),
		component: Inbox,
	},
	{
		id: 4,
		label: screens.profile,
		icon: require("../assets/icons/profile.png"),
		component: Profile,
	},
];

const class_types = [
	{
		id: 0,
		label: "All",
		icon: require("../assets/icons/all.png"),
	},
	{
		id: 1,
		label: "Staff Pick",
		icon: require("../assets/icons/staff_pick.png"),
	},
	{
		id: 2,
		label: "Original",
		icon: require("../assets/icons/original.png"),
	},
];

const class_levels = [
	{
		id: 0,
		label: "Beginner",
	},
	{
		id: 1,
		label: "Intermediate",
	},
	{
		id: 2,
		label: "Advanced",
	},
];

const created_within = [
	{
		id: 0,
		label: "All Time",
	},
	{
		id: 1,
		label: "This Month",
	},
	{
		id: 2,
		label: "This Week",
	},
	{
		id: 3,
		label: "This Day",
	},
	{
		id: 4,
		label: "2 Months",
	},
	{
		id: 5,
		label: "4 Months",
	},
];

const course_details_tabs = [
	{
		id: 0,
		label: "Chapters",
	},
	{
		id: 1,
		label: "Files",
	},
	{
		id: 2,
		label: "Discussions",
	},
];

export default {
	register_options,
	walkthrough,
	categories,
	screens,
	bottom_tabs,
	class_types,
	class_levels,
	created_within,
	course_details_tabs,
};
