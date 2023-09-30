describe("Caesar Cipher", () => {
    it("shifts LOWERCASE letters correctly", () => {
        const words = ["foo", "bar", "pizza", "superman"];
        const results = {
            forShiftFactorOne: ["gpp", "cbs", "qjaab", "tvqfsnbo"],
            forShiftFactorTwo: ["hqq", "dct", "rkbbc", "uwrgtocp"],
        };

        for (const i in words) {
            expect(caesarCipher(words[i], 1)).toBe(
                results.forShiftFactorOne[i]
            );
            expect(caesarCipher(words[i], 2)).toBe(
                results.forShiftFactorTwo[i]
            );
        }
    });

    it("shifts UPPERCASE letters correctly", () => {
        const words = ["FOO", "BAR", "PIZZA", "SUPERMAN"];
        const results = {
            forShiftFactorOne: ["GPP", "CBS", "QJAAB", "TVQFSNBO"],
            forShiftFactorTwo: ["HQQ", "DCT", "RKBBC", "UWRGTOCP"],
        };

        for (const i in words) {
            expect(caesarCipher(words[i], 1)).toBe(
                results.forShiftFactorOne[i]
            );
            expect(caesarCipher(words[i], 2)).toBe(
                results.forShiftFactorTwo[i]
            );
        }
    });
});
