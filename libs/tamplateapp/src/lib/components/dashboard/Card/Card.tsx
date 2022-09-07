import { FC } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useIntl } from "react-intl";
import { Typography, Link } from "@mui/material";
import { getRouteTitle } from "./Card.utils";
import { cardStyles } from "./Card.styles";
import type { CardProps } from "./Card.types";

export const Card: FC<CardProps> = ({ title, quantity, link }) => {
	const intl = useIntl();

	return (
		<Link
			component={RouterLink}
			to={link}
			sx={cardStyles.cardLink}
		>
			<Typography
				variant='h4'
				sx={cardStyles.cardTitle}
			>
				{getRouteTitle(
					intl,
					title
				)}
			</Typography>
			<Typography variant='h2'>
				{quantity}
			</Typography>
		</Link>
	);
};

export default Card;
