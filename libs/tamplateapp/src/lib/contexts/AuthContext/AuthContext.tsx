import {
	createContext,
	FC,
	useContext
} from "react";
import { useGetUserMeQuery } from "@mono-redux-starter/redux";
import { User } from "@mono-redux-starter/shared/types";
import { isAuthExpired } from "@mono-redux-starter/shared/utils";

import { RootState, useTypedSelector } from "../../store";
import { AuthContextProps } from "./AuthContext.types";

export const Auth = createContext<User | null | undefined>(null);

export const AuthContext: FC<AuthContextProps> = ({ children }) => {
	const accessToken = useTypedSelector((state: RootState) => state.authSlice.access_token);

	const isSkip: boolean = !accessToken && isAuthExpired(accessToken);

	const { data } = useGetUserMeQuery(
		null,
		{
			skip: isSkip
		}
	);

	return (
    <Auth.Provider
      value={data}
    >
      {children}
    </Auth.Provider>
	);
};

export const useGetAuthState = () => {
	return useContext(Auth);
};
