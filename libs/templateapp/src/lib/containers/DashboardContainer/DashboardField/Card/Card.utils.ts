import { AppRouteTitleEnum } from "../../../../types/paths";
import { GetRouteTitle } from "./Card.types";

export const getRouteTitle: GetRouteTitle = (
	intl, title
) => {
	switch (title) {
		case AppRouteTitleEnum.LOGIN:
			return intl.formatMessage({
				id: "template.login",
				defaultMessage: "Log In"
			});
		case AppRouteTitleEnum.DASHBOARD:
			return intl.formatMessage({
				id: "template.dashboard",
				defaultMessage: "Dashboard"
			});
		case AppRouteTitleEnum.UNITS:
			return intl.formatMessage({
				id: "template.units",
				defaultMessage: "Units"
			});
		default:
			return intl.formatMessage({
				id: "template.pageNotFound",
				defaultMessage: "Page Not Found"
			});
	}
};
