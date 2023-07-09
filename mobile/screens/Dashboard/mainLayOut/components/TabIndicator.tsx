import { Animated } from "react-native";
import { COLORS, SIZES, constants, FONTS } from "../../../../constants";
const TabIndicator = ({ measureLayout, scrollX, bottom_tabs }: any) => {
	const inputRange = bottom_tabs.map((_: any, i: number) => i * SIZES.width);

	const tabIndicatorWidth = scrollX.interpolate({
		inputRange,
		outputRange: measureLayout.map((measure: any) => measure.width),
	});

	const translateX = scrollX.interpolate({
		inputRange,
		outputRange: measureLayout.map((measure: any) => measure.x),
	});
	return (
		<Animated.View
			style={{
				backgroundColor: COLORS.primary,
				position: "absolute",
				width: tabIndicatorWidth,
				height: "100%",
				left: 0,
				borderRadius: SIZES.radius,
				transform: [
					{
						translateX,
					},
				],
			}}
		/>
	);
};

export default TabIndicator;
