import React from "react";
import {
	View,
	Text,
	Image,
	ImageBackground,
	ScrollView,
	FlatList,
} from "react-native";
import {} from "react-native-vector-icons";
import {
	FONTS,
	COLORS,
	SIZES,
	dummyData,
	icons,
	images,
} from "../../constants";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { IconButton, TextButton } from "../../components";
import VerticalCourseCard from "../../components/VerticalCourseCard";
import { Content } from "./mainLayOut/components";

const Home = () => {
	function renderHeader() {
		return (
			<View
				style={{
					// backgroundColor: COLORS.primary3,
					marginTop: 40,
					paddingHorizontal: SIZES.padding,
					alignItems: "center",
					flexDirection: "row",
					marginBottom: 10,
				}}>
				{/* Greetings */}
				<View style={{ flex: 1 }}>
					<Text style={{ ...FONTS.h2 }}>Hello by Me Here!</Text>
					<Text style={{ color: COLORS.gray50, ...FONTS.body3 }}>
						Thursday, 25, 2023
					</Text>
				</View>
				{/* Notifications */}
				<View>
					<IconButton
						icon={icons.notification}
						iconStyle={{ tintColor: COLORS.black }}
					/>
				</View>
			</View>
		);
	}
	function renderStartLearning() {
		return (
			<ImageBackground
				source={images.featured_bg_image}
				style={{
					marginTop: SIZES.padding,
					marginHorizontal: SIZES.padding,
					padding: 15,
				}}
				imageStyle={{ borderRadius: SIZES.radius }}>
				{/* Info */}
				<View>
					<Text
						style={{
							color: Colors.white,
							...FONTS.body2,
						}}>
						How to
					</Text>
					<Text style={{ color: COLORS.white, ...FONTS.h2 }}>
						Make your brand visible with{" "}
					</Text>
					<Text
						style={{
							color: COLORS.white,
							marginTop: SIZES.padding,
							...FONTS.body4,
						}}>
						By Me
					</Text>
				</View>
				{/* Image */}
				<Image
					source={images.start_learning}
					style={{ marginTop: SIZES.padding, width: "100%", height: 110 }}
				/>
				{/* Button */}
				<TextButton
					label="Start Learning"
					contentContainerStyle={{
						backgroundColor: COLORS.white,
						height: 40,
						borderRadius: 20,
						paddingHorizontal: SIZES.padding,
						width: "50%",
					}}
					lableStyle={{ color: COLORS.black }}
					disabled={false}
					onPress={() => {}}
				/>
			</ImageBackground>
		);
	}
	function renderCourses() {
		return (
			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
				style={{ marginVertical: 20 }}>
				{dummyData.courses_list_1.map((item, index) => (
					<VerticalCourseCard
						course={item}
						containerStyle={{
							marginLeft: index == 0 ? SIZES.padding : SIZES.radius,
							marginRight:
								dummyData.courses_list_1.length - 1 ? SIZES.padding : 0,
						}}
					/>
				))}
			</ScrollView>
		);
	}
	return (
		<View
			style={{
				flex: 1,
				backgroundColor: COLORS.white,
				marginBottom: 20,
			}}>
			{/* Header Section */}
			{renderHeader()}

			{/* Content Section */}
			<ScrollView
				// contentContainerStyle={{ marginBottom: 150 }}
				style={{ marginBottom: 120 }}>
				{/* Start lerning */}
				{renderStartLearning()}

				{/* Course */}
				{renderCourses()}
				{renderCourses()}
			</ScrollView>
		</View>
	);
};

export default Home;
