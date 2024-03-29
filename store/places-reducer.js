import * as FileSystem from "expo-file-system";
import { ADD_PLACE } from "./places-actions";
import Place from "../models/place";

const initialState = {
	places: [],
};

export default (state = initialState, action) => {
	switch (action.type) {
		case ADD_PLACE:
			const newPlace = new Place(
				Date.now().toString(),
				action.payload.title,
				action.payload.image
			);
			return {
				...state,
				places: state.places.concat(newPlace),
			};
		default:
			return state;
	}
};
