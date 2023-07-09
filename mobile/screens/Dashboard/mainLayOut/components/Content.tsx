import { Animated, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SIZES, constants } from "../../../../constants";
import Search from "../../Search";
import Home from "../../Home";
import Profile from "../../Profile";

const Content = ({ flatListRef, scrollXRef }: any) => {
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

export default Content;

const styles = StyleSheet.create({});
