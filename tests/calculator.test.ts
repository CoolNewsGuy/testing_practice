describe("Calculator", () => {
    it("Sums two numbers correctly", () => {
        expect(calculator.add(2, 3)).toBe(5);
        expect(calculator.add(-9, 3)).toBe(-6);
    });

    it("Subtracts two numbers correctly", () => {
        expect(calculator.subtract(2, 3)).toBe(-1);
        expect(calculator.subtract(3, 2)).toBe(1);
    });

    it("Divides a number correctly", () => {
        expect(calculator.divide(3, 2)).toBeCloseTo(1.5);
        expect(calculator.divide(-1, 4)).toBeCloseTo(-0.25);
        expect(calculator.divide(9, 0)).toThrowError("Can't divide by 0");
    });

    it("Multiplies two numbers correctly", () => {
        expect(calculator.multiply(3, 2)).toBe(6);
        expect(calculator.multiply(-3, 2)).toBe(-6);
        expect(calculator.multiply(-3, -3)).toBe(9);
    });
});
