import { dashboardContent, updateContent } from "./DashboardField.utils";
import { dashboardQueryDto } from "@salesSuite/shared/types";

const fakeDashboardInfo = {
	unit: 1,
	floor_plan: 2,
	floor_plate: 3,
	walkthrough: 4,
	building: 5,
	gallery: 6,
	manager: 7,
	minimap: 8,
	view: 9
};

describe(
	"updateContent function",
	() => {
		test(
			"should update content correctly",
			() => {
				const updatedContent = updateContent(
					dashboardContent,
					fakeDashboardInfo as dashboardQueryDto
				);
				expect(updatedContent.find(element => element.key === "unit")?.quantity).toBe(1);
				expect(updatedContent.find(element => element.key === "floor_plan")?.quantity).toBe(2);
				expect(updatedContent.find(element => element.key === "floor_plate")?.quantity).toBe(3);
				expect(updatedContent.find(element => element.key === "walkthrough")?.quantity).toBe(4);
				expect(updatedContent.find(element => element.key === "minimap")?.quantity).toBe(8);
				expect(updatedContent.find(element => element.key === "view")?.quantity).toBe(9);
				expect(updatedContent.find(element => element.key === "building")?.quantity).toBe(5);
				expect(updatedContent.find(element => element.key === "gallery")?.quantity).toBe(6);
			}
		);
	}
);
