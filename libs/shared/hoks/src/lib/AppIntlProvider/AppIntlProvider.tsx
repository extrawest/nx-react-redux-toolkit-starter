import { useEffect, FC } from "react";
import { CustomFormats, IntlProvider } from "react-intl";
import dayjs from "dayjs";
import { getCookie } from "@mono-redux-starter/shared/utils";
import messagesEn from "../../../../i18n/en.json";
import { AppIntlProviderProps, MessagesProps } from "./AppIntlProvider.types";

export const AppIntlProvider: FC<AppIntlProviderProps> = ({
	children
}) => {
	// catch locale
	const currentLocale = getCookie("locale") ?? "en-AU";

	// if need to show currency use it else - delete
	const formats: CustomFormats = {
		number: {
			currency: {
				style: "currency",
				currency: "AUD", // default currency
			},
		},
	};

	// dictionary keys with translation

	const messages: MessagesProps = {
		en: messagesEn,
		"en-AU": messagesEn
	};

	useEffect(
		() => {
			document.documentElement.lang = currentLocale;

			dayjs.locale(currentLocale);
		},
		[currentLocale]
	);

	return (
    <IntlProvider
      locale={currentLocale}
      messages={messages[currentLocale] ?? messages["en"]}
      formats={formats}
      defaultLocale="en"
    >
      {children}
    </IntlProvider>
	);
};

export default AppIntlProvider;