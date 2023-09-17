import { configureStore } from "@reduxjs/toolkit";
import media from "./slices/media.slice";

export function createStore() {
	return configureStore({
		reducer: {
			media,
		},
	});
}

export const store = createStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
