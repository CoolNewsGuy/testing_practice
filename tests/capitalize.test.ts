it("Should capitalize the string", () => {
    const words = ["foo", "bAr", "pizza", "BaNANa"];
    const results = ["Foo", "BAr", "Pizza", "BaNANa"];

    for (const i in words) {
        expect(capitalize(words[i])).toBe(results[i]);
    }
});
