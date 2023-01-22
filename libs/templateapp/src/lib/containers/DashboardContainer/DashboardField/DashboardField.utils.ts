import { AppRouteTitleEnum } from "../../../types/paths";
import { ContentElementType } from "./DashboardField.types";

export const dashboardContent: Array<ContentElementType> = [
	{
		key: "unit",
		title: AppRouteTitleEnum.UNITS,
		quantity: 0,
		link: "/units"
	},
];
