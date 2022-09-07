import { AxiosRequestConfig } from "axios";
import { BaseQueryFn } from "@reduxjs/toolkit/dist/query/react";

export type AxiosBaseQueryRequestConfig = Omit<AxiosRequestConfig, "url" | "method" | "data" | "headers"> & {
	url: string;
	method: AxiosRequestConfig["method"];
	data?: AxiosRequestConfig["data"];
	headers?: AxiosRequestConfig["headers"];
};

export type AuthAxiosBaseQueryRequestConfig = AxiosRequestConfig;

export type AxiosBaseQueryFn = BaseQueryFn<AxiosBaseQueryRequestConfig, unknown, unknown>;
