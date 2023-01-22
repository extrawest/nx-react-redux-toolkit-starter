import { FormikHelpers } from "formik";

export type CommonFormProps<Type> = {
	initialValues: Type;
	onSubmit: (values: Type, form: FormikHelpers<Type>) => void;
	isLoading: boolean;
};
