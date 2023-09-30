import { capitalize } from "../src/capitalize";

it("Capitalizes the string", () => {
    const words = ["foo", "bAr", "pizza", "BaNANa", "2022", "-2002", "", " "];
    const results = ["Foo", "BAr", "Pizza", "BaNANa", "2022", "-2002", "", " "];

    for (const i in words) {
        expect(capitalize(words[i])).toBe(results[i]);
    }
});
