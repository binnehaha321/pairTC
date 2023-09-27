import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ControlType = {
	permitted: boolean;
	isOn: boolean;
};

type ConferenceState = {
	camera: ControlType;
	micro: ControlType;
};

const initialState: ConferenceState = {
	camera: {
		permitted: true,
		isOn: true,
	},
	micro: {
		permitted: true,
		isOn: true,
	},
};

const conferenceSlice = createSlice({
	name: "conference",
	initialState,
	reducers: {
		setPermitCamera: (state, action: PayloadAction<boolean>) => {
			state.camera.permitted = action.payload;
		},
		setToggleCamera: (state) => {
			state.camera.isOn = !state.camera.isOn;
		},
		setPermitMicro: (state, action: PayloadAction<boolean>) => {
			state.micro.permitted = action.payload;
		},
		setToggleMicro: (state) => {
			state.micro.isOn = !state.micro.isOn;
		},
		setDeniedAll: (state) => {
			state.camera.permitted = false;
			state.micro.permitted = false;
		},
	},
});

export const {
	setPermitCamera,
	setToggleCamera,
	setPermitMicro,
	setToggleMicro,
	setDeniedAll,
} = conferenceSlice.actions;
export default conferenceSlice.reducer;
