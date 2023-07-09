import { StyleSheet, View, Text } from "react-native";
import React from "react";
import { Tab, TabView } from "@rneui/themed";

// import { Text } from "@rneui/themed";

const Bookings = () => {
	const [index, setIndex] = React.useState(0);
	return (
		<View style={styles.wrap}>
			<View>
				<View>
					<Text>Hello</Text>
				</View>
				<View>
					<Text>Hello</Text>
				</View>
				<View>
					<Text>Hello</Text>
				</View>
			</View>
			<Tab
				style={{ backgroundColor: "red" }}
				value={index}
				onChange={(e: number) => setIndex(e)}
				indicatorStyle={{
					backgroundColor: "blue",
					height: 3,
				}}
				variant="default">
				<Tab.Item>
					Upcoming
					{/* <Text style={styles.header_text}>Upcoming</Text>; */}
				</Tab.Item>
				<Tab.Item>Completed</Tab.Item>
				<Tab.Item>Cancel</Tab.Item>
			</Tab>
			<TabView value={index} onChange={setIndex} animationType="spring">
				<TabView.Item>
					<Text>Upcoming</Text>
				</TabView.Item>
				<TabView.Item>
					<Text>Completed</Text>
				</TabView.Item>
				<TabView.Item>
					<Text>Cancel</Text>
				</TabView.Item>
			</TabView>
			{/* <Text>Hello</Text> */}
		</View>
	);
};

export default Bookings;

const styles = StyleSheet.create({
	header_text: {
		color: "black",
	},
	wrap: {
		// width: "100%",
		minWidth: 390,
		backgroundColor: "red",
		height: "100%",
		marginBottom: 70,
	},
});
