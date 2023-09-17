import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type MediaProps = {
	mediaId: string;
};

const initialState: MediaProps = {
	mediaId: "",
};

const mediaSlicer = createSlice({
	name: "media",
	initialState,
	reducers: {
		setMediaId: (state, action: PayloadAction<string>) => {
			state.mediaId = action.payload;
		},
	},
});

export const { setMediaId } = mediaSlicer.actions;
export default mediaSlicer.reducer;
