
import { isAuthExpired } from "@mono-redux-starter/shared/utils";
import { RootState, useTypedSelector } from "../../store";

export const useIsLoggedIn = () => {
	const isLoggedIn = useTypedSelector((state: RootState) => state.authSlice.isLoggedIn);
	const accessToken = useTypedSelector((state: RootState) => state.authSlice.access_token);
	const user = useTypedSelector((state: RootState) => state.authSlice);

	const isAuth = isAuthExpired(accessToken);
	const isUserLoggedIn = isLoggedIn && user && !isAuth;

	return {
		isAuth,
		isUserLoggedIn
	};
};

export default useIsLoggedIn;