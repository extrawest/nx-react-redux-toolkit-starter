import { FC } from "react";
import { useIntl } from "react-intl";
import { Box, Typography } from "@mui/material";
import { Form, Formik} from "formik";
import { FormFieldText } from "../../components/common/FormFieldText/FormFieldText";
import Button from "../../components/common/Button/Button";
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
							variant="h1"
						>
							{intl.formatMessage({
								id: "template.login",
								defaultMessage: "Log In"
							})}
						</Typography>
						<FormFieldText
								type="email"
								name="username"
								sx={loginStyles.textInput}
								title={""}
								placeholder={loginText}
								variant="filled"
								color="primary"
						/>
						<FormFieldText
								type="password"
								name="password"
								sx={loginStyles.textInput}
								title={""}
								placeholder={intl.formatMessage({
										id: "template.password",
										defaultMessage: "Password"
									})}
								variant="filled"
								color="primary"
						/>
						<Button
							color="primary"
							disabled={isSubmitting}
							fullWidth
							type="submit"
							variant="contained"
							data-testid="submitBtn"
							isLoading={isLoading}
						>
							{intl.formatMessage({
								id: "template.go",
								defaultMessage: "Go"
							})}
						</Button>
					</Box>
				</Form>
			)}
		</Formik>
	);
};

export default LoginForm;
