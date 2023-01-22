import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { FormikHelpers } from "formik";
import { updateIsLoggedIn } from "@mono-redux-starter/redux";
import { LoginDTO } from "@mono-redux-starter/shared/types";
import { LoginForm } from "../../forms";
import { useTypedDispatch } from "../../store";
import { AppRouteEnum } from "../../types";
import { loginContainerStyles } from "./LoginContainer.styles";

export const LoginContainer: FC = () => {
	const navigate = useNavigate();
	const dispatch = useTypedDispatch();

	const initialValuesLogin = {
		username: "",
		password: ""
	};

	const onSubmit = async (
		values: LoginDTO, form: FormikHelpers<LoginDTO>
	) => {
		// login logic...

		dispatch(updateIsLoggedIn(true));
		navigate(AppRouteEnum.DASHBOARD);

		form.setSubmitting(false);
	};

	return (
		<Box
			component="div"
			sx={loginContainerStyles.pageWrapper}
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
