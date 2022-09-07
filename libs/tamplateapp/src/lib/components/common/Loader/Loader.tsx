import { FC } from "react";
import { CircularProgress } from "@mui/material";
import { LoaderProps } from "./Loader.types";

export const Loader: FC<LoaderProps> = ({
	size = 50,
	color = "secondary",
}) => {
	return (
		<CircularProgress
			disableShrink
			size={size}
			color={color}
		/>
	);
};

export default Loader;
