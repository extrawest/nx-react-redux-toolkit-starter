import AES from "crypto-js/aes";
import {
	decryptUserInfo,
	encryptUserInfo
} from "./crypto";
import { getCookie } from "../cookie/cookie";
import { authData } from "./__mocks__";

jest.mock(
	"crypto-js/aes",
	() => {
		const originalModule = jest.requireActual("crypto-js/aes");
		return {
			__esModule: true,
			...originalModule,
			default: {
				encrypt: jest.fn(),
				decrypt: jest.fn(),
			}
		};
	}
);

jest.mock(
	"../cookie/cookie",
	() => {
		// eslint-disable-next-line @typescript-eslint/no-shadow
		const getCookie = jest.fn();
		const setCookie = jest.fn();
		const removeCookie = jest.fn();

		return { getCookie, setCookie, removeCookie };
	}
);

const token = "token1";

describe(
	"crypto encrypt",
	() => {
		afterEach(() => {
			jest.resetModules();
			jest.clearAllMocks();
		});

		beforeEach(() => {
			jest.clearAllMocks();
			jest.resetAllMocks();

			(AES.encrypt as jest.Mock).mockReturnValueOnce(token);
			(AES.decrypt as jest.Mock).mockReturnValueOnce(JSON.stringify(authData));
			(getCookie as jest.Mock).mockReturnValue(token);
		});

		it(
			"should encrypt user info",
			() => {
				encryptUserInfo(authData);
				const value = getCookie("token");
				expect(AES.encrypt).toBeCalledTimes(1);
				expect(value).not.toBeUndefined();
			}
		);

		it(
			"should decrypt userInfo return authData",
			() => {
				encryptUserInfo(authData);
				const decryptValue = decryptUserInfo();
				expect(AES.decrypt).toBeCalledTimes(1);
				expect(decryptValue).toStrictEqual(authData);
			}
		);

		it(
			"should decrypt userInfo return null",
			() => {
				(getCookie as jest.Mock).mockReturnValueOnce(undefined);
				const decryptValue = decryptUserInfo();
				expect(decryptValue).toBeNull();
			}
		);
	}
);