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

    it("DOES NOT shift non-letters characters", () => {
        const words = ["123", "#!?eC", "hello World!", "it's a-me mario :)!"];
        const results = {
            forShiftFactorOne: ["123", "#!?fD", "ifmmp Xpsme!", "ju't b-nf nbsjp :)!"],
            forShiftFactorTwo: ["123", "#!?gE", "jgnnq Yqtnf!", "kv'u c-og octkq :)!"],
        };

        for (const i in words) {
            expect(caesarCipher(words[i], 1)).toBe(
                results.forShiftFactorOne[i]
            );
            expect(caesarCipher(words[i], 2)).toBe(
                results.forShiftFactorTwo[i]
            );
        }
    })
});
