import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Image } from "react-native";
import { SIZES, images } from "../constants";

const VerticalCourseCard = ({ containerStyle, course }: any) => {
	return (
		<TouchableOpacity
			style={{
				width: 270,
				...containerStyle,
			}}>
			{/* Thumbnail */}
			<Image
				source={course.thumbnail}
				resizeMode="cover"
				style={{
					width: "100%",
					height: 150,
					marginBottom: SIZES.radius,
					borderRadius: SIZES.radius,
				}}
			/>
			<Text>VerticalCourseCard</Text>
		</TouchableOpacity>
	);
};

export default VerticalCourseCard;
