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
	// const { email, name, phone, role } = req.body;
	// const currentUser = await User.find({ email });
	// if (!name && !email && !phone && !role)
	// 	return res.status(401).json("All field required");
	// console.log(currentUser);
	// if (currentUser.length) return res.status(401).json("User already exist");

	// await user.save();
	await User.deleteMany();
	res.status(200).json("User deleted successfully");
}
