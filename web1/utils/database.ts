import mongoose, { ConnectOptions } from "mongoose";

let isConnected = false; // track the connection

// const URL =
// 	"mongodb+srv://extrawonderapps:2023Extrawonder@cluster0.qocoog4.mongodb.net/?retryWrites=true&w=majority";
// const URL = "mongodb://localhost:27017/qruse";

let URL: any = process.env.MONGO_DB_PROD;
if (process.env.NODE_ENV === "development") {
	URL = process.env.MONGO_DB_DEV;
}

export const connectToDB = async () => {
	mongoose.set("strictQuery", true);

	if (isConnected) {
		console.log("MongoDB is already connected");
		return;
	}

	try {
		const options: any = {
			dbName: "qruse",
			useNewUrlParser: true,
			useUnifiedTopology: true,
		};
		// const options: ConnectOptions = {
		// 	dbName: "qruse",
		// 	useUnifiedTopology: true,
		// };
		await mongoose.connect(URL, options);

		isConnected = true;

		console.log("MongoDB connected");
	} catch (error) {
		console.log(error);
	}
};

// import mongoose from "mongoose";

// let isConnected = false; // track the connection
// // const URL = "mongodb://localhost:27017";
// const URL =
// 	"mongodb+srv://extrawonderapps:2023Extrawonder@cluster0.qocoog4.mongodb.net/?retryWrites=true&w=majority";
// export const connectToDB = async () => {
// 	mongoose.set("strictQuery", true);

// 	if (isConnected) {
// 		console.log("MongoDB is already connected");
// 		return;
// 	}

// 	try {
// 		await mongoose.connect(URL, {
// 			dbName: "qruse",
// 			useNewUrlParser: true,
// 			useUnifiedTopology: true,
// 		});

// 		isConnected = true;

// 		console.log("MongoDB connected");
// 	} catch (error) {
// 		console.log(error);
// 	}
// };
