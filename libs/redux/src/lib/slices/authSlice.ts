import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthResponse } from "@mono-redux-starter/shared/types";
import { login } from "../apis/authService";
import { logOut } from "../apis/userService";

const initialState: AuthResponse & { isLoggedIn: boolean } = {
	access_token: "",
	isLoggedIn: false
};

export const authSlice = createSlice({
	name: "authSlice",
	initialState,
	reducers: {
		updateAccessToken(
			state, action: PayloadAction<string>
		) {
			state.access_token = action.payload;
			state.isLoggedIn = true;
		},
		updateIsLoggedIn(
			state, action: PayloadAction<boolean>
		) {
			state.isLoggedIn = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addMatcher(
			logOut.matchFulfilled,
			(state) => {
				state.access_token = "";
				state.isLoggedIn = false;
			}
		);
		builder.addMatcher(
			login.matchFulfilled,
			(
				state, { payload }
			) => {
				state.isLoggedIn = true;
				state.access_token = payload;
			}
		);
	},
});

export const authReducer = authSlice.reducer;
export const { updateAccessToken, updateIsLoggedIn } = authSlice.actions;