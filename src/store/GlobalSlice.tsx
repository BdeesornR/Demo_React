import { createSlice } from "@reduxjs/toolkit";

const initialState: {
	messageClass:
		| ""
		| "custom-message-success"
		| "custom-message-warning"
		| "custom-message-error";
	alertMessage: string;
} = {
	messageClass: "",
	alertMessage: "",
};

const GlobalSlice = createSlice({
	name: "global",
	initialState: initialState,
	reducers: {
		clearAlertMessage: () => {
			return initialState;
		},
		setErrorMessage: (state, action) => {
			return {
				...state,
				messageClass: "custom-message-error",
				alertMessage: action.payload,
			};
		},
		setSuccessMassage: (state, action) => {
			return {
				...state,
				messageClass: "custom-message-success",
				alertMessage: action.payload,
			};
		},
		setWarningMessage: (state, action) => {
			return {
				...state,
				messageClass: "custom-message-warning",
				alertMessage: action.payload,
			};
		},
	},
});

export const GlobalActions = GlobalSlice.actions;
export const GlobalReducer = GlobalSlice.reducer;
