import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const toastify = (msg: String) => toast(msg);

const Toaster = (status: String, msg: String) => {
	const notify = () => toast("Wow so easy!");

	return (
		<div>
			<button onClick={notify}>
				{}
				{msg}!
			</button>
			<ToastContainer />
		</div>
	);
};

export default Toaster;
