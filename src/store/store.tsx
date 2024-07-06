import { configureStore } from "@reduxjs/toolkit";
import { UserReducer } from "./UserSlice";
import { GlobalReducer } from "./GlobalSlice";

export const store = configureStore({
	reducer: {
		GlobalReducer,
		UserReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
