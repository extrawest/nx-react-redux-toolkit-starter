import Cookies, { Cookie } from "universal-cookie";
import { destroyCookie } from "nookies";

const cookie = new Cookies();

/**
 * Set cookie with key and value
 * @param key 
 * @param value 
 */
export const setCookie = (
	key: string, value: Cookie
) => {
	cookie.set(
		key,
		value,
		{
			path: "/",
		}
	);
};

/**
 * Remove cookie by key
 * @param key 
 */
export const removeCookie = (key: string) => {
	cookie.remove(key);
	destroyCookie(
		undefined,
		key,
		{
			path: "/",
		}
	);
};

/**
 * Get cookie by key
 * @param key 
 * @returns 
 */
export const getCookie = (key: string) => {
	return cookie.get(key);
};
