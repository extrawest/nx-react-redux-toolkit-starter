import { RouteProps } from "react-router-dom";
import { RoleEnum } from "@mono-redux-starter/shared/types";

export interface BaseRoutesItem extends RouteProps {
	path?: string,
	roles?: Array<RoleEnum>,
	exact?: boolean,
	isAuth: boolean,
	denyShowLoginPage?: boolean
};

export type PrivateRoutes = Array<BaseRoutesItem>;
export type RoutesType = Array<BaseRoutesItem>;
