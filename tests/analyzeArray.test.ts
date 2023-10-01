describe("Analyze Array", () => {
    it("sets properties other than length to null for an empty array", () => {
        expect(analyzeArray([])).toStrictEqual({
            average: null,
            min: null,
            max: null,
            length: 0,
        });
    });

    it("sets properties correctly", () => {
        const arraySamples = [
            [1, 2, 3, 4],
            [9, 3, 8, 3, 5],
            [3, -5],
            [2],
            [1, 8, 3, 4, 2, 6],
            [-1, -2, -3, -4, 5],
            [5, -2, 20, -4, -5],
        ];

        const results = [
            {
                average: 3,
                min: 1,
                max: 4,
                length: 4,
            },
            {
                average: 8,
                min: 3,
                max: 9,
                length: 5,
            },
            {
                average: -5,
                min: -5,
                max: 3,
                length: 2,
            },
            {
                average: 2,
                min: 2,
                max: 2,
                length: 1,
            },
            {
                average: 4,
                min: 1,
                max: 8,
                length: 6,
            },
            {
                average: -3,
                min: -4,
                max: 5,
                length: 5,
            },
            {
                average: 20,
                min: -5,
                max: 20,
                length: 5,
            },
        ];

        arraySamples.forEach((sample, i) =>
            expect(analyzeArray(sample)).toStrictEqual(results[i])
        );
    });
});
