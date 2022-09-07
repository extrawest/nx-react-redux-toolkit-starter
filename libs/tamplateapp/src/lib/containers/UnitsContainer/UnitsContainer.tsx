import { FC } from "react";
import { useIntl } from "react-intl";
import { Typography } from "@mui/material";
import MainLayout from "../../layouts/MainLayout/MainLayout";

export const UnitsContainer: FC = () => {
	const intl = useIntl();

	return (
		<MainLayout>
			<Typography
				variant="h1"
				sx={{ width: "calc(100% - 240px)" }}
			>
				{intl.formatMessage({
					id: "template.units",
					defaultMessage: "Units"
				})}
			</Typography>
		</MainLayout>
	);
};

export default UnitsContainer;
