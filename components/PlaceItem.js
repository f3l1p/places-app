import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Colors from "../constants/Colors";

const myComp = (props) => {
	return (
		<TouchableOpacity onPress={props.onSelect} style={styles.placeItem}>
			<Image style={styles.image} source={{ uri: props.image }} />
			<View style={styles.container}>
				<Text style={styles.title}>{props.title}</Text>
				<Text style={styles.address}>{props.address}</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	placeItem: {
		borderBottomColor: "#ccc",
		borderBottomWidth: 1,
		paddingVertical: 15,
		paddingHorizontal: 30,
		flexDirection: "row",
		alignItems: "center",
	},

	image: {
		width: 70,
		height: 70,
		borderRadius: 35,
		backgroundColor: "grey",
		borderColor: Colors.primary,
		borderWidth: 1,
	},

	container: {
		marginLeft: 25,
		width: 250,
		justifyContent: "center",
		alignItems: "flex-start",
	},

	title: {
		color: "#666",
		fontSize: 18,
		marginBottom: 5,
	},

	address: {
		color: "#666",
		fontSize: 16,
	},
});

export default myComp;
