
import { createApi } from "@reduxjs/toolkit/query/react";
import { User } from "@mono-redux-starter/shared/types";
import { authAxiosBaseQuery } from "../../axios/authBaseQuery/authBaseQuery";

export const userService = createApi({
	reducerPath: "userService",
	tagTypes: ["User"],
	baseQuery: authAxiosBaseQuery(),
	endpoints: (builder) => ({
		getUserMe: builder.query<User, null>({
			query: () => ({
				url: "/user/me",
				method: "GET"
			}),
		}),
		logOut: builder.query<User, void>({
			query: () => ({
				url: "/user/me/log_out",
				method: "GET"
			}),
		}),
	})
});

export const { getUserMe, logOut } = userService.endpoints;
export const { useGetUserMeQuery } = userService;
