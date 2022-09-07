import { createSlice } from "@reduxjs/toolkit";
import { User } from "@mono-redux-starter/shared/types";
import { getUserMe, logOut } from "../apis";

const initialState: User = {
	id: 0,
	full_name: "",
	is_active: false,
	email: "",
	role: []
};

export const userSlice = createSlice({
	name: "userSlice",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addMatcher(
			logOut.matchFulfilled,
			(state) => {
				state.id = 0;
				state.email = "";
				state.full_name = "";
				state.role = [];
				state.is_active = false;
			}
		);
		builder.addMatcher(
			getUserMe.matchFulfilled,
			(
				state, { payload }
			) => {
				state.id = payload.id;
				state.email = payload.email;
				state.full_name = payload.full_name;
				state.role = payload.role;
				state.is_active = payload.is_active;
			}
		);
	},
});

export const userReducer = userSlice.reducer;