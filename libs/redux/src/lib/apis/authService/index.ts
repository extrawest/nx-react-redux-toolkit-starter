import { createApi } from "@reduxjs/toolkit/query/react";
import { AuthResponse } from "@mono-redux-starter/shared/types";
import { encryptUserInfo } from "@mono-redux-starter/shared/utils";
import { axiosBaseQuery } from "../../axios/baseQuery/baseQuery";

export const authService = createApi({
	reducerPath: "authService",
	baseQuery: axiosBaseQuery(),
	tagTypes: ["Auth"],
	endpoints: (builder) => ({
		login: builder.mutation<string, FormData>({
			query: (body) => ({
				url: "/login/access-token",
				method: "POST",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded"
				},
				data: body,
			}),
			transformResponse: (response: AuthResponse) => encryptUserInfo(response)
		})
	})
});
export const { login } = authService.endpoints;
export const { useLoginMutation } = authService;
