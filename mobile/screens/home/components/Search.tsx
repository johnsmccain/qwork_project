import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { iconSize } from "../../../constants/theme";
import icons from "../../../constants/icons";
const Search = () => {
	return (
		<View style={styles.wrapper}>
			<View style={{ alignItems: "center" }}>
				<Image source={icons.search} style={{ ...iconSize }} />
			</View>
			<TextInput style={styles.input} />
			<View style={{ alignItems: "center" }}>
				<Image source={icons.menu} style={{ ...iconSize }} />
			</View>
		</View>
	);
};

export default Search;

const styles = StyleSheet.create({
	wrapper: {
		padding: 1,
		margin: 20,
		backgroundColor: "#eee",
		flexDirection: "row",
		alignItems: "center",
		borderRadius: 10,
	},
	input: {
		width: "85%",
	},
});
