import { FC } from "react";
import { useIntl } from "react-intl";
import { Typography } from "@mui/material";

export const UnitsContainer: FC = () => {
	const intl = useIntl();

	return (
		<>
			<Typography
				variant="h1"
				sx={{ width: "calc(100% - 240px)" }}
			>
				{intl.formatMessage({
					id: "template.units",
					defaultMessage: "Units"
				})}
			</Typography>
		</>
	);
};

export default UnitsContainer;
