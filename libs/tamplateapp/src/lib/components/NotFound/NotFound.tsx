import { FC } from "react";
import { useIntl } from "react-intl";
import { Link as RouterLink } from "react-router-dom";
import {
	Box,
	Typography,
	Link
} from "@mui/material";
import { AppRouteEnum } from "../../types";

export const NotFound: FC = () => {
	const intl = useIntl();

	return (
		<Box
			component="div"
			sx={{
				minHeight: "100vh",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				padding: 8,
				backgroundColor: "background.paper",
			}}
		>
			<Typography
				variant='h2'
			>
				{intl.formatMessage({
					id: "template.pageNotFound",
					defaultMessage: "Page Not Found"
				})}
			</Typography>
			<Link
				component={RouterLink}
				to={AppRouteEnum.DASHBOARD}
			>
				<Typography
					variant='h4'
				>
					{intl.formatMessage({
						id: "template.returnToDashboard",
						defaultMessage: "Return To Dashboard"
					})}
				</Typography>
			</Link>
		</Box>
	);
};

export default NotFound;
