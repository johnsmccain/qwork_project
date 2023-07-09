import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Tab, Text, TabView } from "@rneui/themed";
import React from "react";
import { Home, Bookings, Calender, Inbox, Profile } from "../screens";
// import { constants } from "../constants";
import { iconSize } from "../constants/theme";
import constant from "../constants/constants";

// const screensMap = [Home, Bookings, Calender, Inbox, Profile];
const Main = () => {
	const [index, setIndex] = React.useState(0);
	return (
		<View style={styles.wrapper}>
			<TabView value={index} onChange={setIndex} animationType="spring">
				<TabView.Item>
					<Home />
				</TabView.Item>
				<TabView.Item>
					<Bookings />
				</TabView.Item>
				<TabView.Item>
					<Calender />
				</TabView.Item>
				<TabView.Item>
					<Inbox />
				</TabView.Item>
				<TabView.Item>
					<Profile />
				</TabView.Item>
			</TabView>

			<Tab
				style={{ position: "absolute", bottom: 0, backgroundColor: "white" }}
				value={index}
				onChange={(e: number) => setIndex(e)}
				indicatorStyle={{
					backgroundColor: "blue",
					height: 3,
				}}
				variant="default">
				{constant.bottom_tabs.map((btn: any, id: number) => (
					<Tab.Item
						key={id}
						icon={{ name: "cart", type: "ionicon", color: "black" }}>
						<Text>{btn.label}</Text>
					</Tab.Item>
				))}
			</Tab>
		</View>
	);
};
export default Main;

const styles = StyleSheet.create({
	wrapper: {
		position: "relative",
		backgroundColor: "white",
		height: "100%",
		width: "100%",
		// bottom: 0,
	},
});
