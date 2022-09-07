import { FC } from "react";
import { PageLayoutProps } from "./Pagelayout.types";
import { HelmetHead } from "./HelmetHead/HelmetHead";

export const PageLayout: FC<PageLayoutProps> = ({ children }) =>  (
	<>
		<HelmetHead />
		{children}
	</>
);

export default PageLayout;
