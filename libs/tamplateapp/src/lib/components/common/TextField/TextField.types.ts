import { TextFieldProps as MuiTextFieldProps } from "@mui/material";
import { ReactNode } from "react";

export type TextFieldProps = MuiTextFieldProps & {
	title: ReactNode;
	isPrice?: boolean;
	isArea?: boolean;
};