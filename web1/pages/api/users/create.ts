// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDB } from "../../../utils/database";
import User from "../../../models/user";
import { Document } from "mongoose";

interface IUser extends Document {
	name: string;
	email: string;
	phone: string;
}
// interface IUsers extends IUser {
//   users: ]
// }

interface IUsers {
	users: IUser[];
}

export default async function (req: NextApiRequest, res: NextApiResponse) {
	await connectToDB();
	const { email, name, phone, role } = req.body;
	const currentUser = await User.find({ email });
	// console.log(name, email, phone, role);
	if (!name && !email && !phone && !role)
		return res.status(400).json("All field required");
	// console.log(currentUser);
	if (currentUser.length)
		return res.status(203).json({ msg: "User already exist" });
	const user = await User.create({ email, name, phone, role });
	await user.save();
	res.status(201).json("User created successfully");
}
