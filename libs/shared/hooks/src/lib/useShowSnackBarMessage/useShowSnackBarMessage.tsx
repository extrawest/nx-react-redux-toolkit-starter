import { useEffect } from "react";
import { useSnackbar, VariantType } from "notistack";

export const useShowSnackBarMessage = (
	trigger: boolean,
	message: string,
	type: VariantType
) => {
	const { enqueueSnackbar } = useSnackbar();

	useEffect(
		() => {
			if (trigger) {
				enqueueSnackbar(
					message,
					{
						variant: type,
						preventDuplicate: true,
						autoHideDuration: 1500
					}
				);
			}
		},
		[trigger]
	);
};

export default useShowSnackBarMessage;