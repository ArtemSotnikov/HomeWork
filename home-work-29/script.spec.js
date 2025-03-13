import {ageClassification, weekFn} from "./script.js";

describe("Test ageClassification", () => {
    it("Should return null, when age not exist", () => {
        expect(ageClassification(-1)).toBe(null);
    })
})