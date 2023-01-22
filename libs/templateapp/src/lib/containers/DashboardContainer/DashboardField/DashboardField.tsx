import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { useIntl } from "react-intl";
import { Card } from "./Card/Card";
import { dashboardStyles } from "./DashboardField.styles";
import { dashboardContent } from "./DashboardField.utils";

export const DashboardField: FC = () => {
	const intl = useIntl();

	return (
		<Box
			component="div"
			sx={dashboardStyles.dashboardContainer}
		>
			<Box
				component="div"
				sx={dashboardStyles.groupContainer}
			>
				<Typography
					variant="h4"
					sx={dashboardStyles.groupTitle}
				>
					{intl.formatMessage({
						id: "admin.content",
						defaultMessage: "Content"
					})}
				</Typography>
				<Box
					component="div"
					sx={dashboardStyles.groupWrap}
				>
					{dashboardContent.map((card) => (
						<Card
							key={card.title}
							title={card.title}
							quantity={card.quantity}
							link={card.link}
						/>
					))}
				</Box>
			</Box>
		</Box>
	);
};

export default DashboardField;
