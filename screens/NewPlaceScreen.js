import React, { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	TextInput,
	Button,
	Alert,
} from "react-native";

import Colors from "../constants/Colors";
import ImageSelector from "../components/ImageSelector";

import { useDispatch } from "react-redux";
import * as placesActions from "../store/places-actions";

const NewPlaceScreen = (props) => {
	const [titleValue, setTitleValue] = useState("");
	const [image, setImage] = useState("");
	const dispatch = useDispatch();

	const titleChangeHandler = (text) => {
		setTitleValue(text);
	};

	const savePlaceHandler = () => {
		dispatch(placesActions.addPlace(titleValue, image));
		props.navigation.goBack();
	};

	const handlePickImage = (image) => {
		setImage(image);
	};

	return (
		<ScrollView>
			<View style={styles.form}>
				<Text style={styles.label}>Title</Text>
				<TextInput
					style={styles.textInput}
					onChangeText={titleChangeHandler}
					value={titleValue}
					placeholder="Your Place"
				/>

				<ImageSelector onImage={handlePickImage} />

				<Button
					title="Save"
					color={Colors.primary}
					onPress={savePlaceHandler}
				/>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	form: {
		margin: 30,
	},
	label: {
		fontSize: 18,
		marginBottom: 15,
	},
	textInput: {
		borderBottomColor: "#ccc",
		borderBottomWidth: 1,
		marginBottom: 15,
		paddingHorizontal: 2,
		paddingVertical: 4,
	},
});

export default NewPlaceScreen;
