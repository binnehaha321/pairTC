import { Profile } from "@/models/peer";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { generateNickname } from "../actions/conference.action";

type AppState = {
	localPeer: Profile;
	remotePeers: Profile[];
	remotePeersId: string[];
};

const initialState: AppState = {
	localPeer: {
		avatar: "",
		id: "",
		name: "",
		username: "",
	},
	remotePeers: [],
	remotePeersId: [],
};

const appSlice = createSlice({
	name: "app",
	initialState,
	reducers: {
		setLocalPeer: (state, action: PayloadAction<Profile>) => {
			state.localPeer = action.payload;
		},
		setRemotePeers: (state, action: PayloadAction<Profile>) => {
			state.remotePeers = [...state.remotePeers, action.payload];
		},
		setRemotePeersId: (state, action: PayloadAction<string>) => {
			state.remotePeersId = [...state.remotePeersId, action.payload];
		},
	},
});

export const { setLocalPeer, setRemotePeers, setRemotePeersId } =
	appSlice.actions;
export default appSlice.reducer;
