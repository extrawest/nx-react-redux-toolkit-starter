import dayjs from "dayjs";
import jwtDecode from "jwt-decode";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import isBetween from "dayjs/plugin/isBetween";
import utc from "dayjs/plugin/utc";
import { decryptUserInfo } from "./crypto/crypto";

dayjs.extend(utc);
dayjs.extend(isSameOrAfter);
dayjs.extend(isBetween);

export const isAuthExpired = (accessToken: string) => {
	const authInfo = decryptUserInfo(accessToken);
	const expiresAt: Record<string, number> | null = authInfo?.access_token
		? jwtDecode(authInfo?.access_token)
		: null;

	if (expiresAt && expiresAt["exp"])
		return dayjs.utc().isSameOrAfter(dayjs.utc(dayjs.unix(expiresAt?.["exp"])));

	return true;
};

export default isAuthExpired;
