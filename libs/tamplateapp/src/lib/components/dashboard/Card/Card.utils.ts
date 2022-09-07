import { AppRouteTitleEnum } from "../../../types/paths";
import { GetRouteTitle } from "./Card.types";

export const getRouteTitle: GetRouteTitle = (
	intl, title
) => {
	switch (title) {
		case AppRouteTitleEnum.LOGIN:
			return intl.formatMessage({
				id: "admin.login",
				defaultMessage: "Log In"
			});
		case AppRouteTitleEnum.DASHBOARD:
			return intl.formatMessage({
				id: "admin.dashboard",
				defaultMessage: "Dashboard"
			});
		case AppRouteTitleEnum.UNITS:
			return intl.formatMessage({
				id: "admin.units",
				defaultMessage: "Units"
			});
		default:
			return intl.formatMessage({
				id: "admin.pageNotFound",
				defaultMessage: "Page Not Found"
			});
	}
};
