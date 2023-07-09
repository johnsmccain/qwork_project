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
	const users = await User.find();
	// const userx:any = await User.find();
	// console.log(user)
	await connectToDB();
	res.status(200).json(users);
}
