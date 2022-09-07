import { setLocale } from "yup";
import { useIntl } from "react-intl";

export const YupGlobalLocale = () => {
	const intl = useIntl();

	const requiredText = intl.formatMessage({
		id: "required",
		defaultMessage: "This field is required",
	});

	const invalidEmail = intl.formatMessage({
		id: "invalidemail",
		defaultMessage: "Enter a valid email format",
	});

	const minStringText = intl.formatMessage({
		id: "minStringText",
		// eslint-disable-next-line no-template-curly-in-string
		defaultMessage: "This field must be at least ${min} characters",
	});

	const maxStringText = intl.formatMessage({
		id: "maxStringText",
		// eslint-disable-next-line no-template-curly-in-string
		defaultMessage: "This field must be at most ${max} characters",
	});

	const minNumberText = intl.formatMessage({
		id: "minNumberText",
		// eslint-disable-next-line no-template-curly-in-string
		defaultMessage: "This field must be at least ${min}",
	});

	const maxNumberText = intl.formatMessage({
		id: "maxNumberText",
		// eslint-disable-next-line no-template-curly-in-string
		defaultMessage: "This field must be at most ${max}",
	});

	const validUrlText = intl.formatMessage({
		id: "validUrlText",
		defaultMessage: "Must be a valid URL",
	});

	const onlyNumbers = intl.formatMessage({
		id: "onlyNumbers",
		defaultMessage: "Only digit number",
	});

	const validText = intl.formatMessage({
		id: "oneCharacter",
		defaultMessage: "Must be at least 1 number or letter",
	});

	setLocale({
		mixed: {
			required: requiredText,
		},
		string: {
			email: invalidEmail,
			min: minStringText,
			max: maxStringText,
			url: validUrlText,
			matches: validText
		},
		number: {
			min: minNumberText,
			max: maxNumberText,
			positive: onlyNumbers,
		},
		array: {
			length: requiredText,
			min: requiredText
		}
	});

	return null;
};

export default YupGlobalLocale;
