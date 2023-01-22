import {
	Ability,
	ExtractSubjectType,
	MongoQuery,
	Subject,
	SubjectRawRule
} from "@casl/ability";
import { AnyObject } from "@casl/ability/dist/types/types";
import { User } from "@mono-redux-starter/shared/types";
import { RootReduxState } from "@mono-redux-starter/templateapp";

import { defineRulesFor } from "./rules";

const ability = new Ability();
let currentAuth: User;

export const abilityCheckStorage = (store: RootReduxState) => {
	store.subscribe(() => {
		const prevAuth = currentAuth;
		currentAuth = store.getState().userSlice;
		if (prevAuth !== currentAuth) {
			const rules: SubjectRawRule<string, ExtractSubjectType<Subject>, MongoQuery<AnyObject>>[] = defineRulesFor(currentAuth);

			ability.update(rules);
		}
	});

	return ability;
};

export default abilityCheckStorage;
