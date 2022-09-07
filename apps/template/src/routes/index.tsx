import { FC, Suspense } from "react";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import {
	Loader,
	PrivateRoute,
	PageLayout,
	PublicRoute
} from "@mono-redux-starter/tamplateapp";
import { commonRoutes } from "./commonRoutes";
import { privateRoutes } from "./privateRoutes";

const AppRoutes: FC = () => {
	return (
		<Suspense
			fallback={
				<Box
					component="div"
					display="flex"
					justifyContent="center"
					alignItems="center"
					height={"100vh"}
				>
					<Loader />
				</Box>
			}
		>
			<Routes>
				{[
					...privateRoutes,
					...commonRoutes,
				].map((
					route, index
				) => (
					<Route
						{...route}
						key={`r_${index}_${route.path}`}
						element={route.isAuth ? (
							<PrivateRoute roles={route.roles}>
								<PageLayout>
									{route.element}
								</PageLayout>
							</PrivateRoute>
						) : (
							<PublicRoute
								denyShowLoginPage={route?.denyShowLoginPage}
								roles={route.roles}
							>
								<PageLayout>
									{route.element}
								</PageLayout>
							</PublicRoute>
						)}
					/>))}
			</Routes>
		</Suspense>
	);
};

export default AppRoutes;
