import { FC, PropsWithChildren } from "react";

export const PageLayout: FC<PropsWithChildren<Record<string, unknown>>> = ({ children }) => (
	<>
		{children}
	</>
);

export default PageLayout;
