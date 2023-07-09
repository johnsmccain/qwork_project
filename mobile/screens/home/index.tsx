import {
	FlatList,
	Image,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import { Head, Search } from "./components";
import Banner from "./components/Banner";

const Home = () => {
	return (
		<ScrollView style={styles.wrap}>
			<Head />
			<Search />
			<Banner />
		</ScrollView>
	);
};

export default Home;

const styles = StyleSheet.create({
	wrap: {
		marginBottom: 70,
	},
});
