/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import type { PropsWithChildren } from "react";
import {
	SafeAreaView,
	ScrollView,
	StatusBar,
	Text,
	useColorScheme,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Colors } from "react-native/Libraries/NewAppScreen";
import { MainLayout } from "./layout";
// import { MainLayout } from "./screens";
type SectionProps = PropsWithChildren<{
	title: string;
}>;

function App(): JSX.Element {
	const isDarkMode = useColorScheme() === "dark";
	const Stack = createNativeStackNavigator();
	const backgroundStyle = {
		backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
	};

	return (
		// <SafeAreaView style={backgroundStyle}>
		// 	<StatusBar
		// 		barStyle={isDarkMode ? "light-content" : "dark-content"}
		// 		backgroundColor={backgroundStyle.backgroundColor}
		// 	/>
		// 	<ScrollView
		// 		contentInsetAdjustmentBehavior="automatic"
		// 		style={backgroundStyle}>
		// 		<Text>hello</Text>
		// 	</ScrollView>
		// </SafeAreaView>
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{ headerShown: false }}
				initialRouteName="Dashboard">
				<Stack.Screen name="Dashboard" component={MainLayout} />
				{/* <Stack.Screen name="init" component={MainLayout} /> */}
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
