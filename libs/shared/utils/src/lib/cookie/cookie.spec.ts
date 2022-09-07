import Cookies, { Cookie } from "universal-cookie";
import {
	getCookie, removeCookie, setCookie
} from "./cookie";

jest.mock(
	"universal-cookie",
	() => {
		const mCookie = {
			get: jest.fn(),
			set: jest.fn(),
			remove: jest.fn()
		};
		return jest.fn(() => mCookie);
	}
);

describe(
	"cookies",
	() => {
		let cookies: Cookie;

		beforeAll(() => {
			cookies = new Cookies();
		});

		afterEach(() => {
			jest.resetAllMocks();
		});

		it(
			"should set the cookie correctly",
			() => {
				const mockSet = jest.fn();
				cookies.set = mockSet;

				setCookie(
					"key",
					"value"
				);

				expect(mockSet).toBeCalled();
			}
		);

		it(
			"should get the cookie correctly",
			() => {
				(cookies.get as jest.Mocked<Cookie>).mockReturnValueOnce("value1");
				const value = getCookie("key");

				expect(value).toBe("value1");
			}
		);

		it(
			"should remove the cookie correctly",
			() => {
				const mockSet = jest.fn();
				cookies.remove = mockSet;

				removeCookie("key");
				expect(mockSet).toBeCalled();
			}
		);
	}
);