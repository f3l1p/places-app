import React, { useState } from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

import Colors from "../constants/Colors";

import * as ImagePicker from "expo-image-picker";

const ImageSelector = (props) => {
	const [pickedUri, setPickedUri] = useState(null);

	const verifyPermissions = async () => {
		const { status } = await ImagePicker.requestCameraPermissionsAsync();

		if (status !== "granted") {
			Alert.alert("We need permission to work dude!", [{ text: "OK" }]);
			return false;
		}
		return true;
	};

	const handleTakeImage = async () => {
		const isCameraOk = await verifyPermissions();

		if (!isCameraOk) return;

		const image = await ImagePicker.launchCameraAsync({
			allowsEditing: false,
			aspect: [16, 9],
			quality: 0.8,
		});
		setPickedUri(image.uri);
		props.onImage(image.uri);
	};

	return (
		<View style={styles.container}>
			<View style={styles.preview}>
				{pickedUri ? (
					<Image style={styles.image} source={{ uri: pickedUri }} />
				) : (
					<Text style={styles.text}>No image...</Text>
				)}
			</View>
			<Button
				title="Tomar Foto"
				color={Colors.primary}
				onPress={handleTakeImage}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		marginBottom: 18,
	},

	preview: {
		borderWidth: 1,
		borderColor: Colors.primary,
		padding: 0,
		marginBottom: 10,
		backgroundColor: "#ccc",
		height: 300,
	},

	text: {
		color: "black",
	},

	image: {
		height: "100%",
		width: "100%",
	},
});

export default ImageSelector;
