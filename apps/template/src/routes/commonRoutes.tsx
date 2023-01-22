import { lazy } from "react";
import { AppRouteEnum, RoutesType } from "@mono-redux-starter/templateapp";

const LoginPage = lazy(() => import("../pages/Login/Login"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));

export const commonRoutes: RoutesType = [
	{
		element: <LoginPage />,
		path: AppRouteEnum.LOGIN,
		exact: true,
		isAuth: false,
		denyShowLoginPage: true,
	},
	{
		element: <NotFound />,
		isAuth: false,
	},
];
