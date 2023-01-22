import { FC } from "react";
import { Button as MuiButton } from "@mui/material";
import Loader from "../Loader/Loader";
import { ButtonProps } from "./Button.types";

export const Button: FC<ButtonProps> = ({
	children,
	isLoading = false,
	isShowText = false,
	...rest
}) => {
	return (
		<MuiButton
			{...rest}
		>
			{!isLoading && children}
			{isLoading && <Loader
				color="inherit"
				size={20}
			/>}
		</MuiButton>
	);
};

export default Button;
