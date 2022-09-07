import { FC } from "react";
import { useIntl } from "react-intl";
import { Typography } from "@mui/material";
import MainLayout from "../../layouts/MainLayout/MainLayout";

export const NotFoundContainer: FC = () => {
	const intl = useIntl();

	return (
		<MainLayout>
			<Typography
				variant="h1"
				sx={{ width: "calc(100% - 240px)" }}
			>
				{intl.formatMessage({
					id: "template.pageNotFound",
					defaultMessage: "Page Not Found"
				})}
			</Typography>
		</MainLayout>
	);
};

export default NotFoundContainer;
