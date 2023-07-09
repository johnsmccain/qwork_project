import { useEffect, useRef, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import TabIndicator from "./TabIndicator";
import { COLORS, FONTS } from "../../../../constants";

const Tabs = ({ scrollX, onButtonPress, bottom_tabs }: any) => {
	const containerRef = useRef<any>();
	const [measureLayout, setMeasureLayout] = useState<[]>([]);
	useEffect(() => {
		let ml: any = [];
		bottom_tabs.map((button_tab: any) => {
			button_tab?.ref?.current?.measureLayout(
				containerRef.current,
				(x: any, y: any, width: any, height: any) => {
					ml.push({ x, y, width, height });
					if (ml.length === bottom_tabs.length) {
						setMeasureLayout(ml);
					}
				}
			);
		});
		// return () => {};
	}, [containerRef?.current]);

	return (
		<View
			ref={containerRef}
			style={{
				flex: 1,
				flexDirection: "row",
			}}>
			{/* Tab Indicator */}
			{measureLayout?.length > 0 && (
				<TabIndicator scrollX={scrollX} measureLayout={measureLayout} />
			)}

			{/* Tabs */}
			{bottom_tabs.map((item: any, index: any) => {
				return (
					<TouchableOpacity
						style={{
							paddingHorizontal: 15,
							flex: 1,
							alignItems: "center",
							justifyContent: "center",
						}}
						key={`BottomTab-${index}`}
						onPress={() => onButtonPress(index)}
						ref={item.ref}>
						<Image
							source={item.icon}
							style={{ width: 25, height: 25 }}
							resizeMode="contain"
						/>
						<Text
							style={{
								marginTop: 3,
								color: COLORS.white,
								...FONTS.h3,
							}}>
							{item.label}
						</Text>
					</TouchableOpacity>
				);
			})}
		</View>
	);
};
export default Tabs;
