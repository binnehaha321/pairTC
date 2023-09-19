import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Media = {
	id: string;
	title: string;
	tags: string[];
	thumbnail: string;
	playing?: boolean;
};

interface MediaState {
	playlist: Media[];
	favorites: Media[];
	playingTrack: string;
}

const initialState: MediaState = {
	playlist: [],
	favorites: [],
	playingTrack: "",
};

const mediaSlicer = createSlice({
	name: "media",
	initialState,
	reducers: {
		setPlaylist: (state, action: PayloadAction<Media>) => {
			state.playlist = [...state.playlist, action.payload];
		},
		removeMediaById: (state, action: PayloadAction<string>) => {
			state.playlist = state.playlist.filter(
				(item) => item.id !== action.payload
			);
			if (state.playlist.length) {
				state.playlist[0].playing = true;
				state.playingTrack = state.playlist[0].id;
			} else {
				state.playingTrack = "";
			}
		},
		setFavorite: (state, action: PayloadAction<Media>) => {
			state.favorites = [...state.favorites, action.payload];
		},
		removeFavById: (state, action: PayloadAction<string>) => {
			state.favorites = state.favorites.filter(
				(item) => item.id !== action.payload
			);
		},
		setPlayTrack: (state, action: PayloadAction<string>) => {
			state.playingTrack = action.payload;
			const trackIndex = state.playlist.findIndex(
				(track) => track.id === action.payload
			);
			state.playlist.forEach((track) => {
				if (track.playing) track.playing = false;
			});
			state.playlist[trackIndex].playing = true;
		},
	},
});

export const {
	setPlaylist,
	removeMediaById,
	setFavorite,
	removeFavById,
	setPlayTrack,
} = mediaSlicer.actions;
export default mediaSlicer.reducer;
