import {createContext} from "react";
import {AnyAbility} from "@casl/ability";
import {createContextualCan} from "@casl/react";

export const AbilityContext = createContext<AnyAbility>({} as AnyAbility);
export const Can = createContextualCan(AbilityContext.Consumer);
