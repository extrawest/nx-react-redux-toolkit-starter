import axios, { AxiosError } from "axios";
import { decryptUserInfo } from "@mono-redux-starter/shared/utils";
import { AxiosBaseQueryFn } from "./../baseQuery";
import { configuration } from "../baseQuery";

const authAxiosInstance = axios.create(configuration);

authAxiosInstance.interceptors.response.use(
	undefined,
	(error) => Promise.reject(error)
);

export const authAxiosBaseQuery = ({ baseUrl }: { baseUrl: string } = { baseUrl: "" }): AxiosBaseQueryFn =>
	async (
		{ url, method, data, ...rest },
		{ getState }
	) => {
		try {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			const cryptoToken = (getState() as any).authSlice.access_token;
			const token = decryptUserInfo(cryptoToken);
			const { headers, ...restParams } = rest;
			const result = await authAxiosInstance({
				url: `${baseUrl}${url}`,
				method,
				data,
				headers: {
					...headers,
					Authorization: `Bearer ${token?.access_token}`
				},
				...restParams
			});

			return { data: result.data };
		} catch (axiosError) {
			const error = axiosError as AxiosError;

			return {
				error: {
					status: error?.response?.status,
					data: error?.response?.data
				},
			};
		}
	};
