import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import { useSelector } from "react-redux";
import PlaceItem from "../components/PlaceItem";

const PlacesListScreen = (props) => {
	const places = useSelector((state) => state.places.places);

	return (
		<FlatList
			data={places}
			keyExtractor={(item) => item.id}
			renderItem={(itemData) => (
				<PlaceItem
					title={itemData.item.title}
					onSelect={() => {
						props.navigation.navigate("Detail", {
							placeTitle: itemData.item.title,
							placeId: itemData.item.id,
						});
					}}
					address={null}
					image={itemData.item.image}
				/>
			)}
		/>
	);
};

const styles = StyleSheet.create({});

export default PlacesListScreen;
