import { FC, PropsWithChildren } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { RootState, useTypedSelector } from "../store";
import { MainLayout } from "../layouts";
import { AppRouteEnum } from "../types";

import { PrivateRouteProps } from "./PrivateRoute.types";

export const PrivateRoute: FC<PropsWithChildren<PrivateRouteProps>> = ({
	children,
	roles
}) => {
	const location = useLocation();

	const isLoggedIn = useTypedSelector((state: RootState) => state.authSlice.isLoggedIn);
	
	//part for real app
	// const { isAuth, isUserLoggedIn } = useIsLoggedIn();
	// const userRoles = useTypedSelector(state => state.userSlice.role);

	// const isPermissions = roles?.includes(userRoles[0]?.name);

	// useEffect(
	// 	() => {
	// 		if (isAuth) dispatch(resetStateAction());
	// 	},
	// 	[isAuth]
	// );

	if (!isLoggedIn) {
		return (
			<Navigate
				to={AppRouteEnum.LOGIN}
				state={{ from: location }}
				replace
			/>
		);
	}

	return <MainLayout>{children}</MainLayout>;
};

export default PrivateRoute;
