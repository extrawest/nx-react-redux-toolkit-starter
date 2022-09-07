import { FormikHelpers } from "formik";

export type Values = {
	username: string,
	password: string
};

export type LoginFormProps = {
	initialValues: Values;
	isLoading: boolean;
	onSubmit: (values: Values, form: FormikHelpers<Values>) => void;
};
