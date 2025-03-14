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

describe("Test day of the week", () => {
    it("Day index out of week", () => {
        expect(weekFn(10)).toBeNull();
    })

    it("Not a number parameter", () => {
        expect(weekFn("1 + 1")).toBeNull();
    })

    it("TGI Friday", () => {
        expect(weekFn(5)).toEqual("П\'ятниця");
    })

    it("It is Monday", () => {
        expect(weekFn(1) === "Понеділок").toBeTruthy();
    })

    it("Tuesday exists", () => {
        expect(weekFn(2)).not.toBeNull();
    })

    it('It is already Wednesday', () => {
        expect(weekFn(3)).toMatch("Середа");
    });

    it("It is Thursday", () => {
        expect(weekFn(4)).toContain("Четв")
    })

    it("It is Saturday", () => {
        expect(weekFn(6)).toEqual("Субота");
    })

    it("It is Sunday", () => {
        expect(weekFn(7)).toMatch("Неділя");
    })
})