import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import images from "../../../constants/images";
import icons from "../../../constants/icons";
import { iconSize } from "../../../constants/theme";
const Header = () => {
	return (
		<View style={styles.head}>
			<TouchableOpacity>
				<View style={{ flexDirection: "row", alignItems: "center" }}>
					<Image style={styles.profile} source={images.profile} />
					<View>
						<Text>Good Morning</Text>
						<Text>Andrew Ainsley</Text>
					</View>
				</View>
			</TouchableOpacity>

			<View style={{ flexDirection: "row", gap: 10 }}>
				<TouchableOpacity>
					<Image style={{ ...iconSize }} source={icons.notification} />
				</TouchableOpacity>
				<TouchableOpacity>
					<Image style={{ ...iconSize }} source={icons.favourite} />
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default Header;

const styles = StyleSheet.create({
	head: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 10,
	},
	profile: {
		width: 50,
		height: 50,
		marginRight: 10,
		borderRadius: 30,
	},
	icon: {
		width: 20,
		height: 20,
	},
});
