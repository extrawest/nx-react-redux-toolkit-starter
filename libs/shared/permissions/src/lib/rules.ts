import { Ability, AbilityBuilder } from "@casl/ability";
import { RoleEnum, User } from "@mono-redux-starter/shared/types";

export const defineRulesFor = (user: User) => {
	const { can, rules } = new AbilityBuilder(Ability);

	if (
		user.role.find(role => role.name === RoleEnum.ROLE_SUPER_ADMIN) ||
		user.role.find(role => role.name === RoleEnum.ROLE_ADMIN)
	) {
		can(
			"manage",
			"all"
		);
		can(
			"see",
			"all"
		);
	}

	return rules;
};
