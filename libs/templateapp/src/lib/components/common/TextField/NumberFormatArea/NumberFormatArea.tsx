import { forwardRef } from "react";
import NumberFormat from "react-number-format";
import { ReactNumberFormatProps } from "./NumberFormatArea.types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any, react/display-name
export const ReactNumberFormatArea = forwardRef<NumberFormat<any>, ReactNumberFormatProps>((
	props, ref
) => {
	const { onChange, ...other } = props;

	return (
		<NumberFormat
			{...other}
			getInputRef={ref}
			onValueChange={(values) => {
				onChange({
					target: {
						name: props.name,
						value: values.value,
					},
				});
			}}
			thousandSeparator
			isNumericString
			suffix=" M²"
		/>
	);
});
