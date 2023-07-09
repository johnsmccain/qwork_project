const categories = [
	{
		id: 0,
		title: "Cleaning",
		thumbnail: require("../assets/images/bg_1.png"),
	},
	{
		id: 1,
		title: "Repairing",
		thumbnail: require("../assets/images/bg_2.png"),
	},
	{
		id: 2,
		title: "Painting",
		thumbnail: require("../assets/images/bg_3.png"),
	},
	{
		id: 3,
		title: "Laundry",
		thumbnail: require("../assets/images/bg_4.png"),
	},
	{
		id: 4,
		title: "Appliance",
		thumbnail: require("../assets/images/bg_5.png"),
	},
	{
		id: 5,
		title: "Plumbing",
		thumbnail: require("../assets/images/bg_6.png"),
	},
	{
		id: 6,
		title: "Shifting",
		thumbnail: require("../assets/images/bg_1.png"),
	},
	{
		id: 7,
		title: "Beauty",
		thumbnail: require("../assets/images/bg_2.png"),
	},
	{
		id: 8,
		title: "AC Repairing",
		thumbnail: require("../assets/images/bg_3.png"),
	},
	{
		id: 9,
		title: "Vehicle",
		thumbnail: require("../assets/images/bg_4.png"),
	},
	{
		id: 10,
		title: "Electronics",
		thumbnail: require("../assets/images/bg_5.png"),
	},
	{
		id: 11,
		title: "Massage",
		thumbnail: require("../assets/images/bg_6.png"),
	},
	{
		id: 12,
		title: "Men's Salon",
		thumbnail: require("../assets/images/bg_6.png"),
	},
];

const courses_list_1 = [
	{
		id: 0,
		title: "Canava Graphic Design Course - Beginner",
		duration: "2h 30m",
		thumbnail: require("../assets/images/thumbnail_1.png"),
	},
	{
		id: 1,
		title: "The Complete Presentation and speech",
		duration: "1h 30m",
		thumbnail: require("../assets/images/thumbnail_2.png"),
	},
];

const services_list_2 = [
	{
		id: 0,
		title: "Home Cleaning",
		duration: "2h 30m",
		full_name: "James Morris",
		ratings: 4.9,
		price: 75,
		reviews: 8328,
		category: "cleaning",
		is_favourite: true,
		thumbnail: require("../assets/images/thumbnail_1.png"),
	},
	{
		id: 1,
		title: "Home Cleaning",
		duration: "2h 30m",
		full_name: "James Morris",
		ratings: 4.9,
		price: 75,
		reviews: 8328,
		category: "cleaning",
		is_favourite: false,
		thumbnail: require("../assets/images/thumbnail_2.png"),
	},
	{
		id: 2,
		title: "Home Cleaning",
		duration: "2h 30m",
		full_name: "James Morris",
		ratings: 4.9,
		price: 75,
		reviews: 8328,
		category: "cleaning",
		is_favourite: true,
		thumbnail: require("../assets/images/thumbnail_3.png"),
	},
	{
		id: 3,
		title: "Home Cleaning",
		duration: "2h 30m",
		full_name: "James Morris",
		ratings: 4.9,
		price: 75,
		reviews: 8328,
		category: "cleaning",
		is_favourite: false,
		thumbnail: require("../assets/images/thumbnail_4.png"),
	},
	{
		id: 4,
		title: "Home Cleaning",
		duration: "2h 30m",
		full_name: "James Morris",
		ratings: 4.9,
		price: 75,
		reviews: 8328,
		category: "cleaning",
		is_favourite: false,
		thumbnail: require("../assets/images/thumbnail_4.png"),
	},
	{
		id: 5,
		title: "Home Cleaning",
		duration: "2h 30m",
		full_name: "James Morris",
		ratings: 4.9,
		price: 75,
		reviews: 8328,
		category: "cleaning",
		is_favourite: false,
		thumbnail: require("../assets/images/thumbnail_4.png"),
	},
];

const top_searches = [
	{
		id: 0,
		label: "Cleaning",
	},
	{
		id: 1,
		label: "Laundry",
	},
	{
		id: 2,
		label: "Plumbing",
	},
	{
		id: 3,
		label: "Painting",
	},
	{
		id: 4,
		label: "Mobile",
	},
	{
		id: 5,
		label: "Animation",
	},
];

const service_details = {
	id: 0,
	title: "Home Cleaning",
	number_of_reviews: 4479,
	ratings: 4.8,
	categorie: "cleaning",
	price: 20,
	is_bookmarked: false,
	full_name: {
		name: "Jenny Wilson",
		title: "Home Cleaning",
	},
	location: {
		icon: require("../assets/icons/sun.png"),
		address: "No.33 Kasaya street",
		lga: "Chikun",
		state: "Kaduna",
		country: "Nigeria",
	},
	bio: "Hi my name is Jenny Wilson and I am a professinal home cleaner with 5years experiance working with a unicorn company",
	media: {
		photos: [
			{
				file: require("../assets/images/doc.png"),
			},
			{
				file: require("../assets/images/doc.png"),
			},
			{
				file: require("../assets/images/doc.png"),
			},
		],
		videos: [
			{
				file: require("../assets/images/doc.png"),
			},
			{
				file: require("../assets/images/doc.png"),
			},
			{
				file: require("../assets/images/doc.png"),
			},
		],
	},
	students: [
		{
			id: 0,
			name: "Student 1",
			thumbnail: require("../assets/images/student_1.png"),
		},
		{
			id: 1,
			name: "Student 2",
			thumbnail: require("../assets/images/student_2.png"),
		},
		{
			id: 2,
			name: "Student 3",
			thumbnail: require("../assets/images/student_3.png"),
		},
		{
			id: 3,
			name: "Student 3",
			thumbnail: require("../assets/images/student_3.png"),
		},
	],
	files: [
		{
			id: 0,
			name: "UI Fundamentals",
			author: "Shared by ByProgrammers",
			upload_date: "13th Sep 2021",
			thumbnail: require("../assets/images/pdf.png"),
		},
		{
			id: 1,
			name: "UX Checklist",
			author: "Shared by ByProgrammers",
			upload_date: "11th Sep 2021",
			thumbnail: require("../assets/images/doc.png"),
		},
		{
			id: 2,
			name: "Sketch File",
			author: "Shared by ByProgrammers",
			upload_date: "7th Sep 2021",
			thumbnail: require("../assets/images/sketch.png"),
		},
	],
	discussions: [
		{
			id: 0,
			profile: require("../assets/images/profile.png"),
			name: "ByProgrammers",
			no_of_comments: "11 comments",
			no_of_likes: "72 likes",
			posted_on: "5 days ago",
			comment:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			replies: [
				{
					id: 0,
					profile: require("../assets/images/student_1.png"),
					name: "ByProgrammers",
					posted_on: "4 days ago",
					comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
				},
				{
					id: 1,
					profile: require("../assets/images/student_1.png"),
					name: "ByProgrammers",
					posted_on: "4 days ago",
					comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
				},
				{
					id: 2,
					profile: require("../assets/images/student_1.png"),
					name: "ByProgrammers",
					posted_on: "4 days ago",
					comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
				},
				{
					id: 3,
					profile: require("../assets/images/student_1.png"),
					name: "ByProgrammers",
					posted_on: "4 days ago",
					comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
				},
			],
		},
		{
			id: 1,
			profile: require("../assets/images/profile.png"),
			name: "ByProgrammers",
			no_of_comments: "21 comments",
			no_of_likes: "372 likes",
			posted_on: "14 days ago",
			comment:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			replies: [
				{
					id: 0,
					profile: require("../assets/images/student_1.png"),
					name: "ByProgrammers",
					posted_on: "7 days ago",
					comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
				},
				{
					id: 1,
					profile: require("../assets/images/student_1.png"),
					name: "ByProgrammers",
					posted_on: "7 days ago",
					comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
				},
				{
					id: 2,
					profile: require("../assets/images/student_1.png"),
					name: "ByProgrammers",
					posted_on: "7 days ago",
					comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
				},
			],
		},
	],
};

const notificationByDays = [
	{
		title: "Today",
		data: [
			{
				id: 1,
				avatar: require("../assets/images/student_1.png"),
				name: "Admin",
				created_at: "2h 47m ago",
				message:
					"Asked to join online courses regarding professional web designing.",
			},
			{
				id: 2,
				avatar: require("../assets/images/student_2.png"),
				name: "Customer Care",
				created_at: "3h 02m ago",
				message: "Your 50% discount code is: ON50DIS. Apply on checkout.",
			},
			{
				id: 3,
				avatar: require("../assets/images/student_3.png"),
				name: "Lilian Ellis",
				created_at: "4h 32m ago",
				message: "Asked assiged you to watch professional videography course.",
			},
		],
	},
	{
		title: "Yesterday",
		data: [
			{
				id: 4,
				avatar: require("../assets/images/student_1.png"),
				name: "Admin",
				created_at: "16h 47m ago",
				message:
					"You just signed in from another device check inbox for more details.",
			},
			{
				id: 5,
				avatar: require("../assets/images/student_2.png"),
				name: "Customer Care",
				created_at: "20h 02m ago",
				message: "Your 50% discount code is: ON50DIS. Apply on checkout.",
			},
		],
	},
];

export default {
	categories,
	courses_list_1,
	services_list_2,
	top_searches,
	service_details,
	notificationByDays,
};
