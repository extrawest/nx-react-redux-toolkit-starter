import { IntlShape } from "react-intl";
import { AppRouteTitleEnum } from "../../../../types/paths";

export type CardProps = {
	title: AppRouteTitleEnum,
	quantity: number,
	link: string
};

export type GetRouteTitle = (intl: IntlShape, title: AppRouteTitleEnum) => string;
