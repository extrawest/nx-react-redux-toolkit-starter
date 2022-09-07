import { FC } from "react";
import { Helmet } from "react-helmet-async";

export const HelmetHead: FC = () => {
	const projectTitle = "Sales Suite Admin Panel";

	return (
		<Helmet key={Math.random()}>
			<title>{projectTitle}</title>
		</Helmet>
	);
};

export default HelmetHead;
