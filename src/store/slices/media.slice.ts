import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HeaderKeyProps } from "@/models/tabs";
import { handlePlayNext } from "../actions/media.action";

export type Media = {
	id: string;
	title: string;
	tags: string[];
	thumbnail: string;
	loved: boolean;
};

export type PlayingTrack = {
	track_id: string;
	pause: boolean;
};

interface MediaState {
	playlist: Media[];
	favorites: Media[];
	// playingTrack: string;
	playingTrack: PlayingTrack;
	tab: HeaderKeyProps;
}

const initialState: MediaState = {
	playlist: [],
	favorites: [],
	playingTrack: {
		track_id: "",
		pause: false,
	},
	tab: "list",
};

const mediaSlicer = createSlice({
	name: "media",
	initialState,
	reducers: {
		setPlaylist: (state, action: PayloadAction<Media>) => {
			state.playlist = [...state.playlist, action.payload];
		},
		removeMediaById: (state, action: PayloadAction<string>) => {
			// remove track from playlist
			state.playlist = state.playlist.filter(
				(item) => item.id !== action.payload
			);

			// play the first track of playlist, if there's no any track, then don't play anything
			state.playingTrack.track_id = handlePlayNext(state.playlist);
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
			state.playingTrack.track_id = handlePlayNext(state.favorites);

			state.playlist = state.playlist.map((track) =>
				track.id === action.payload ? { ...track, loved: false } : track
			);
		},
		setTab: (state, action: PayloadAction<HeaderKeyProps>) => {
			state.tab = action.payload;
		},
		setPlayTrack: (state, action: PayloadAction<string>) => {
			state.playingTrack.track_id = action.payload;
		},
		setPlayPause: (state) => {
			state.playingTrack.pause = !state.playingTrack.pause;
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
	setPlayPause,
} = mediaSlicer.actions;
export default mediaSlicer.reducer;
