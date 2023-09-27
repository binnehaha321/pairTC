import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { handlePlayNext } from "../actions/media.action";
import type { HeaderKeyProps } from "@/models/tabs";
import type { Media } from "@/models/media";

interface MediaState {
	playlist: Media[];
	favorites: Media[];
	playingTrack: string;
	tab: HeaderKeyProps;
}

const initialState: MediaState = {
	playlist: [],
	favorites: [],
	playingTrack: "",
	tab: "list",
};

const mediaSlicer = createSlice({
	name: "media",
	initialState,
	reducers: {
		setPlaylist: (state, action: PayloadAction<Media>) => {
			const lovedTrack =
				state.favorites?.find((track) => track.id === action.payload?.id) ||
				action.payload;
			state.playlist = [...state.playlist, lovedTrack];
			state.playingTrack = handlePlayNext(state.playlist);
		},
		removeMediaById: (state, action: PayloadAction<string>) => {
			// remove track from playlist
			state.playlist = state.playlist.filter(
				(item) => item.id !== action.payload
			);

			// play the first track of playlist, if there's no any track, then don't play anything
			state.playingTrack = handlePlayNext(state.playlist);
		},
		setFavorite: (state, action: PayloadAction<Media>) => {
			state.favorites = [
				...state.favorites,
				{ ...action.payload, loved: true },
			];

			state.playlist = state.playlist.map((track) =>
				track.id === action.payload?.id ? { ...track, loved: true } : track
			);
		},
		removeFavById: (state, action: PayloadAction<string>) => {
			// remove track from favorites
			state.favorites = state.favorites.filter(
				(item) => item.id !== action.payload
			);

			// play the first track of favorites, if there's no any track, then don't play anything
			state.playingTrack = handlePlayNext(state.favorites);

			state.playlist = state.playlist.map((track) =>
				track.id === action.payload ? { ...track, loved: false } : track
			);
		},
		setTab: (state, action: PayloadAction<HeaderKeyProps>) => {
			state.tab = action.payload;
		},
		setPlayTrack: (state, action: PayloadAction<string>) => {
			state.playingTrack = action.payload;
		},
	},
});

export const {
	setPlaylist,
	removeMediaById,
	setFavorite,
	removeFavById,
	setTab,
	setPlayTrack,
} = mediaSlicer.actions;
export default mediaSlicer.reducer;
