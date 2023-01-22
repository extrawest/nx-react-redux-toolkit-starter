import { BaseRoutesItem } from "../types/routes.types";

export type PrivateRouteProps = Pick<BaseRoutesItem, "denyShowLoginPage" | "roles">;
