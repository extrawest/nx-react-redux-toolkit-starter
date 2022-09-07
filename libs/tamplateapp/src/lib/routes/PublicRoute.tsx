import { FC, PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import { RootState, useTypedSelector } from "../store";
import { AppRouteEnum } from "../types/paths";
import { PrivateRouteProps } from "./PrivateRoute.types";

export const PublicRoute: FC<PropsWithChildren<PrivateRouteProps>> = ({
	children,
	denyShowLoginPage
}) => {
	const isLoggedIn = useTypedSelector((state: RootState) => state.authSlice.isLoggedIn);

	if (isLoggedIn  && denyShowLoginPage) {
		return (
			<Navigate
				to={{
					pathname: AppRouteEnum.DASHBOARD,
				}}
			/>
		);
	}

	return (
		<>
			{children}
		</>
	);
};

export default PublicRoute;
