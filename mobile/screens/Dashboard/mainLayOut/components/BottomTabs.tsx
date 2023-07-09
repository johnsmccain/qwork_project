import { View, Text } from "react-native";
import React, { createRef } from "react";
import { Shadow } from "react-native-shadow-2";
import { COLORS, SIZES, constants } from "../../../../constants";
import Tabs from "./Tabs";

const BottomTabs = ({ scrollXRef, onButtonPress }: any) => {
	const bottom_tabs = constants.bottom_tabs.map(btn_tab => ({
		...btn_tab,
		ref: createRef<any>(),
	}));
	return (
		<View
			style={{
				marginBottom: 20,
				paddingHorizontal: SIZES.padding,
				paddingVertical: SIZES.radius,
			}}>
			<Shadow style={{ width: SIZES.width - SIZES.padding * 2, height: 85 }}>
				<View
					style={{
						flex: 1,
						borderRadius: SIZES.radius,
						backgroundColor: COLORS.primary3,
						// paddingVertical: 20,
					}}>
					<Tabs
						scrollX={scrollXRef}
						onButtonPress={onButtonPress}
						bottom_tabs={bottom_tabs}
					/>
					{/* <View
							style={{
								backgroundColor: COLORS.primary2,
								width: 20,
								height: "100%",
							}}></View> */}
				</View>
			</Shadow>
			{/* <Text>heh</Text> */}
		</View>
	);
};

export default BottomTabs;
