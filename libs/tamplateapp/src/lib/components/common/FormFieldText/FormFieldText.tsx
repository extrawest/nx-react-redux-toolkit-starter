import { FC } from "react";
import { Field, FieldProps } from "formik";
import { hasErrorForMetaField } from "@mono-redux-starter/shared/utils";
import TextField from "../../common/TextField/TextField";
import { styles } from "./FormFieldText.styles";
import type { FormFieldTextProps } from "./FormFieldText.types";

export const FormFieldText: FC<FormFieldTextProps> = ({
	name, ...rest
}) => {
	return (
		<Field
			name={name}
			sx={rest.sx ?? styles.field }
		>
			{({ field, meta }: FieldProps) => {
				const { value, ...fieldProps } = field;
				return (
					<TextField
						error={hasErrorForMetaField(meta)}
						helperText={meta.touched ? meta.error : ""}
						value={value ?? ""}
						{...fieldProps}
						{...rest}
					/>
				);
			}}
		</Field>
	);
};

export default FormFieldText;
