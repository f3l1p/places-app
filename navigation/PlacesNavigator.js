import React from "react";
import { Platform, Button, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import PlacesListScreen from "../screens/PlacesListScreen";
import PlaceDetailScreen from "../screens/PlaceDetailScreen";
import NewPlaceScreen from "../screens/NewPlaceScreen";
import MapScreen from "../screens/MapScreen";

import Colors from "../constants/Colors";

const PlacesNavigator = () => {
	const Stack = createStackNavigator();
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Home"
				screenOptions={{
					headerStyle: {
						backgroundColor: Platform.OS === "android" ? Colors.primary : "",
					},
					headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
				}}
			>
				<Stack.Screen
					name="Home"
					component={PlacesListScreen}
					options={({ navigation, route }) => ({
						headerTitle: "Home",
						headerRight: () => (
							<View style={{ marginRight: 13 }}>
								<Button
									onPress={() => navigation.navigate("NewPlace")}
									title="+"
								/>
							</View>
						),
					})}
				/>
				<Stack.Screen
					name="Detail"
					component={PlaceDetailScreen}
					options={{ title: "Detail" }}
				/>
				<Stack.Screen
					name="Map"
					component={MapScreen}
					options={{ title: "Map" }}
				/>
				<Stack.Screen
					name="NewPlace"
					component={NewPlaceScreen}
					options={{ title: "New Place" }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default PlacesNavigator;
