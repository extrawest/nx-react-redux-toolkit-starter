import { FieldMetaProps } from "formik";

export const hasErrorForMetaField = (meta: FieldMetaProps<Record<string, unknown>>) => {
	return Boolean(meta.touched && meta.error);
};