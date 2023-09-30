it("Reverse the string", () => {
    const words = ["foo", "BAR", "Foo BAr", "Pizza", "1234", "", " "];
    const results = ["oof", "RAB", "rAB ooF", "azziP", "4321", "", " "];

    for (const i in words) {
        expect(reverseString(words[i])).toBe(results[i]);
    }
});
