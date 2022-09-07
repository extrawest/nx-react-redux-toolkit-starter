import {
	TypedUseSelectorHook,
	useDispatch,
	useSelector
} from "react-redux";
import logger from "redux-logger";
import {
	configureStore,
	combineReducers,
	Reducer 
} from "@reduxjs/toolkit";
import storage from "reduxjs-toolkit-persist/lib/storage";
import { CurriedGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";
import {
	FLUSH,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
	REHYDRATE, 
	persistReducer,
	persistStore,
} from "reduxjs-toolkit-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";
import {
	authSlice,
	authReducer,
	userSlice,
	userReducer,
	authService,
	userService,
	unAuthenticatedMiddleware,
	RESET_STATE_ACTION_TYPE
} from "@mono-redux-starter/redux";
import { isDevelopmentMode } from "@mono-redux-starter/shared/utils";

const secretKey: string = process.env["NX_CRYPTO_JS_KEY"] as string;

const encryptor = encryptTransform({
	secretKey: secretKey,
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	onError: (error: any) => {
		// Handle the error.
		console.log({ error });
	}
});

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["authSlice", "userSlice"],
	transforms: [encryptor]
};

const reducers = {
	[authSlice.name]: authReducer,
	[userSlice.name]: userReducer,
	[authService.reducerPath]: authService.reducer,
	[userService.reducerPath]: userService.reducer,
};

const middlewareList = [
	authService.middleware,
	userService.middleware,
	unAuthenticatedMiddleware
];

const combinedReducer = combineReducers<typeof reducers>(reducers);

export const rootReducer: Reducer<RootState> = (
	state,
	action
) => {
	if (action.type === RESET_STATE_ACTION_TYPE) {
		state = {} as RootState;
	}

	return combinedReducer(
		state,
		action
	);
};

const persistedReducer = persistReducer(
	persistConfig,
	rootReducer
);

const getPersistMiddleware = (getDefaultMiddleware: CurriedGetDefaultMiddleware<unknown>) => getDefaultMiddleware({
	serializableCheck: {
		ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
	}
});

const getStoreMiddleware = (getDefaultMiddleware: CurriedGetDefaultMiddleware<unknown>) => (
	isDevelopmentMode()
		? [...getPersistMiddleware(getDefaultMiddleware), ...middlewareList, logger]
		: getPersistMiddleware(getDefaultMiddleware).concat(...middlewareList)
);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (gDM) => getStoreMiddleware(gDM as CurriedGetDefaultMiddleware<unknown>),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof combinedReducer>;
export const useTypedDispatch = () => useDispatch<AppDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export type RootReduxState = ReturnType<typeof store.getState>;