import { FaviconTypeEnum } from "@salesSuite/shared/types";

export const getFaviconExtension = ( faviconType: string ) => {
	switch (faviconType) {
		case FaviconTypeEnum.PNG:
			return	"image/png";
		case FaviconTypeEnum.SVG:
			return	"image/svg";
		default:
			return "image/x-icon";
	}
};
