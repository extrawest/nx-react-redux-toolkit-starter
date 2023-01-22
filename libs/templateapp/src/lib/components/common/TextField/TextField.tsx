import { FC } from "react";
import { TextField as MuiTextField } from "@mui/material";
import { textFieldStyles } from "./TextField.styles";
import { TextFieldProps } from "./TextField.types";

export const TextField: FC<TextFieldProps> = ({
	label,
	...rest
}) => {

	return (
		<MuiTextField
			fullWidth
			margin="normal"
			variant="outlined"
			color="primary"
			label={label}
			sx={textFieldStyles.inputStyle}
			{...rest}
		/>
	);
};

export default TextField;
