import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PlacesNavigator from "./navigation/PlacesNavigator";
import { Provider } from "react-redux";
import store from "./store";

export default function App() {
	return (
		<Provider store={store}>
			<PlacesNavigator />
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
