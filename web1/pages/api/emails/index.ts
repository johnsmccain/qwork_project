// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDB } from "../../../utils/database";
import Email from "../../../models/email";
import { Document } from "mongoose";

interface IEmail extends Document {
	email: string;
}
// interface IUsers extends IUser {
//   users: ]
// }

export default async function (req: NextApiRequest, res: NextApiResponse) {
	await connectToDB();
	const { email } = req.body;
	const currentEmail = await Email.find({ email });
	console.log(email);
	if (!email) return res.status(400).json("field required");
	// console.log(currentUser);
	if (currentEmail.length)
		return res.status(203).json({ msg: "Email already exist" });
	const newEmail = await Email.create({ email });
	await newEmail.save();
	res.status(201).json("Email added successfully");
}
