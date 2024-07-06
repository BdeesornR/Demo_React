import { createSlice } from "@reduxjs/toolkit";

import { UserData } from "../services/dto";

const initialState: {
	isLoading: boolean;
	isUserFound: boolean;
	data: UserData;
} = {
	isLoading: false,
	isUserFound: false,
	data: {
		username: "",
	},
};

const UserSlice = createSlice({
	name: "user",
	initialState: initialState,
	reducers: {
		toggleIsLoading: (state, action) => {
			return {
				...state,
				isLoading: action.payload,
			};
		},
		setUser: (state, action) => {
			return {
				...state,
				isUserFound: true,
				data: action.payload,
			};
		},
		updateUser: (state, action) => {
			if (action.payload.key === "username") {
				return {
					...initialState,
					data: {
						username: action.payload.value,
					},
				};
			} else {
				return {
					...state,
					data: {
						...state.data,
						[action.payload.key]: action.payload.value,
					},
				};
			}
		},
		clearUser: () => {
			return initialState;
		},
	},
});

export const UserActions = UserSlice.actions;
export const UserReducer = UserSlice.reducer;
