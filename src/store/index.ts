import { configureStore } from "@reduxjs/toolkit";
import app from "./slices/app.slice";
import media from "./slices/media.slice";
import conference from "./slices/conference.slice";

export function createStore() {
	return configureStore({
		reducer: {
			app,
			media,
			conference,
		},
	});
}

export const store = createStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
