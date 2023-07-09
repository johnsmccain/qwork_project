import { Schema, model, models } from "mongoose";

enum Role {
	Driver = "male",
	Passenger = "passenger",
}

const UserSchema = new Schema(
	{
		email: {
			type: String,
			unique: [true, "Email already exists!"],
			required: [true, "Email is required!"],
		},
		name: {
			type: String,
			required: [true, "Username is required!"],
			// match: [
			// 	/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
			// 	"Username invalid, it should contain 8-20 alphanumeric letters and be unique!",
			// ],
		},
		phone: {
			type: String,
		},
		role: {
			type: String,
			enum: ["passenger", "driver"],
			default: "passenger",
			// required: true,
		},
	},
	{ timestamps: true }
);

const User = models.User || model("User", UserSchema);

export default User;
