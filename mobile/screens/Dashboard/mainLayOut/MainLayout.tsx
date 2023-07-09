import React, {
	createRef,
	useCallback,
	useEffect,
	useRef,
	useState,
} from "react";
import { View, Text, TouchableOpacity, Image, Animated } from "react-native";
import { Home, Profile, Search } from "../../index";
import { COLORS, SIZES, constants, FONTS } from "../../../constants";
// import { Colors } from "react-native/Libraries/NewAppScreen";
import { Shadow } from "react-native-shadow-2";
import { BottomTabs, Content } from "./components";
const bottom_tabs = constants.bottom_tabs.map(btn_tab => ({
	...btn_tab,
	ref: createRef<any>(),
}));
const TabIndicator = ({ measureLayout, scrollX }: any) => {
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
const Tabs = ({ scrollX, onButtonPress }: any) => {
	const containerRef = useRef<any>();
	const [measureLayout, setMeasureLayout] = useState<[]>([]);
	useEffect(() => {
		let ml: any = [];
		bottom_tabs.map(button_tab => {
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
			{bottom_tabs.map((item, index) => {
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
const MainLayout = () => {
	const flatListRef = useRef<any>();
	const scrollXRef = useRef(new Animated.Value(0)).current;

	// const onButtonPress = (buttonTabIndex: number) => {
	// 	flatListRef?.current?.scrollToOffset({
	// 		offset: buttonTabIndex * SIZES.width,
	// 	});
	// };
	const onButtonPress = useCallback((buttonTabIndex: number) => {
		flatListRef?.current?.scrollToOffset({
			offset: buttonTabIndex * SIZES.width,
		});
	}, []);
	const renderContent = () => {
		return (
			<View style={{ flex: 1 }}>
				<Animated.FlatList
					ref={flatListRef}
					snapToAlignment="center"
					snapToInterval={SIZES.width}
					decelerationRate="fast"
					scrollEnabled={false}
					showsHorizontalScrollIndicator={false}
					data={constants.bottom_tabs}
					horizontal
					pagingEnabled
					keyExtractor={(item: any) => `Main-${item.id}`}
					onScroll={Animated.event(
						[{ nativeEvent: { contentOffset: { x: scrollXRef } } }],
						{ useNativeDriver: false }
					)}
					renderItem={({ item, index }: any) => {
						return (
							<View style={{ height: SIZES.height, width: SIZES.width }}>
								{item.label == constants.screens.home && <Home />}
								{item.label == constants.screens.search && <Search />}
								{item.label == constants.screens.profile && <Profile />}
							</View>
						);
					}}
				/>
			</View>
		);
	};

	function renderBottomTabs() {
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
						<Tabs scrollX={scrollXRef} onButtonPress={onButtonPress} />
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
	}
	return (
		<View style={{ backgroundColor: COLORS.white, flex: 1 }}>
			{/* Contents */}
			<Content flatListRef={flatListRef} scrollXRef={scrollXRef} />
			{/* Bottom Tab */}
			{/* <BottomTabs
				scrollXRef={scrollXRef}
				onButtonPress={onButtonPress}
				// bottom_tabs={bottom_tabs}
			/> */}
			{renderBottomTabs()}
		</View>
	);
};

export default MainLayout;
