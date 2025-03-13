import {ageClassification, weekFn} from "./script.js";

describe("Test ageClassification", () => {
    it("Should return null, when age not exist", () => {
        expect(ageClassification(-1)).toBe(null);
    })

    it("Check childhood", () => {
        expect(ageClassification(15)).toEqual("Дитинство");
    })

    it("Check if person young", () => {
        expect(ageClassification(30) === "Молодість").toBeTruthy;
    })

    it("Check if person is adult", () => {
        expect(ageClassification(45)).toMatch("Зрілість")
    })

    it("Check if person already quite old", () => {
        expect(ageClassification(70)).toContain("Стар")
    })

    it("Check if person already old", () => {
        expect(ageClassification(90)).toEqual("Довголіття")
    })

    it("Check if person very old", () => {
        expect(ageClassification(Number("110"))).toEqual("Рекорд")
    })

    it("Should return null, when age is not realistic", () => {
        expect(ageClassification(150)).toBeNull();
    })

    it("Check if person doesn't exist", () => {
        expect(ageClassification("Dog")).toBeNull();
    })
})