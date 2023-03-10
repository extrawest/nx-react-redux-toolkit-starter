import { IntlShape } from "react-intl";
import { AppRouteEnum } from "../../../types";
import { MenuItemProps } from "../MenuItem/MenuItem.types";

export const getContentLinks = (intl: IntlShape): Array<MenuItemProps> => [
	{
		href: AppRouteEnum.UNITS,
		title: intl.formatMessage({
			id: "template.units",
			defaultMessage: "Units"
		})
	},
];