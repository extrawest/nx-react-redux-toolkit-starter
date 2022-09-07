import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { FormikHelpers } from "formik";
import { updateIsLoggedIn } from "@mono-redux-starter/redux";
import { LoginForm, Values } from "../../forms/LoginForm";
import { useTypedDispatch } from "../../store";
import { styles } from "./LoginContainer.styles";

export const LoginContainer: FC = () => {
	const navigate = useNavigate();
	const dispatch = useTypedDispatch();

	const initialValuesLogin = {
		username: "",
		password: ""
	};

	const onSubmit = async(
		values: Values, form: FormikHelpers<Values>
	) => {
		// login logic...

		dispatch(updateIsLoggedIn(true));
		navigate("/");

		form.setSubmitting(false);
	};

	return (
		<Box
			component="div"
			sx={styles.pageWrapper}
		>
			<LoginForm
				initialValues={initialValuesLogin}
				onSubmit={onSubmit}
				isLoading={false}
			/>
		</Box>
	);
};

export default LoginContainer;
