import { TextFieldProps } from "../TextField/TextField.types";

export type FormFieldTextProps = Omit<TextFieldProps, "name"> & {
	name: string,
};
