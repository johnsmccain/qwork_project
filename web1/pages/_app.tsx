import Navbar from "../components/landingPage/Navbar";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div className="relative w-full bg-lighBlue h-screen ">
			<Navbar />
			<Component {...pageProps} />
			<ToastContainer />
		</div>
	);
}
