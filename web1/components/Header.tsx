import Head from "next/head";
// import { Head } from "next/document";
import React from "react";

const Header = ({ title }: any) => {
	return (
		<Head>
			<title>Qruse | {title}</title>
			<meta
				name="description"
				content="Find a safe ride, drive and earn. make more friends while sharing your ride."
			/>

			<link href="https://fonts.cdnfonts.com/css/axiforma" rel="stylesheet" />

			{/* <link rel="icon" href="../assets/brand.png" /> */}
			{/* <link rel="icon" href="/favicon.ico" /> */}
			<link rel="icon" href="/logo.png" />
		</Head>
	);
};

export default Header;
