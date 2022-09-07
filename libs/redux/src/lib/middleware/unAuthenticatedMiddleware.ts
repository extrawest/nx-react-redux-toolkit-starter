import {
	isRejectedWithValue, Middleware, createAction
} from "@reduxjs/toolkit";
import storage from "reduxjs-toolkit-persist/lib/storage";

export const RESET_STATE_ACTION_TYPE = "resetState";

export const resetStateAction = createAction(
	RESET_STATE_ACTION_TYPE,
	() => {
		storage.removeItem("persist:auth");
		storage.removeItem("persist:user");
		storage.removeItem("persist:root");
		return { payload: null };
	}
);

export const unAuthenticatedMiddleware: Middleware = ({
	dispatch
}) => (next) => (action) => {
	if (isRejectedWithValue(action) && (
		[403, 401].includes(action.payload.status) ||
		(action.payload.status === 400) && (action.payload.data.detail === "Inactive user")
	)) {
		dispatch(resetStateAction());
	}
	return next(action);
};