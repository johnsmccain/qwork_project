import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../constants";

interface IProps {
	contentContainerStyle: any;
	label: String;
	lableStyle: any;
	disabled: true | false;
	onPress: any;
}
const TextButton = ({
	contentContainerStyle,
	label,
	lableStyle,
	disabled,
	onPress,
}: IProps) => {
	return (
		<TouchableOpacity
			style={{
				justifyContent: "center",
				backgroundColor: COLORS.primary,
				alignItems: "center",
				...contentContainerStyle,
			}}
			disabled={disabled}
			onPress={onPress}>
			<Text style={{ color: COLORS.white, ...FONTS.h3, ...lableStyle }}>
				{label}
			</Text>
		</TouchableOpacity>
	);
};

export default TextButton;
