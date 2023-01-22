import { FC } from "react";
import { useIntl } from "react-intl";
import { Box, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import { FormFieldText, Button } from "../../components";
import { validateShema } from "./LoginForm.schema";
import { loginStyles } from "./LoginForm.styles";
import type { LoginFormProps } from "./LoginForm.types";

export const LoginForm: FC<LoginFormProps> = ({
	initialValues,
	isLoading,
	onSubmit
}) => {
	const intl = useIntl();

	const loginText = intl.formatMessage({
		id: "template.email",
		defaultMessage: "Email"
	});

	return (
		<Formik
			initialValues={initialValues}
			validateOnBlur={false}
			validationSchema={validateShema}
			onSubmit={onSubmit}
		>
			{({
				isSubmitting
			}) => (
				<Form>
					<Box
						component="div"
						sx={loginStyles.pageContent}
					>
						<Typography
							sx={loginStyles.title}
							variant="h2"
						>
							{intl.formatMessage({
								id: "template.login",
								defaultMessage: "Log In"
							})}
						</Typography>
						<FormFieldText
							type="email"
							name="username"
							label={loginText}
							variant="outlined"
							color="primary"
						/>
						<FormFieldText
							type="password"
							name="password"
							label={intl.formatMessage({
								id: "template.password",
								defaultMessage: "Password"
							})}
							variant="outlined"
							color="primary"
						/>
						<Button
							color="primary"
							disabled={isSubmitting}
							fullWidth
							type="submit"
							size="large"
							variant="contained"
							data-testid="submitBtn"
							isLoading={isLoading}
						>
							{intl.formatMessage({
								id: "template.login",
								defaultMessage: "Login"
							})}
						</Button>
					</Box>
				</Form>
			)}
		</Formik>
	);
};

export default LoginForm;
