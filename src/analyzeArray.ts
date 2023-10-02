export function analyzeArray(numbers: number[]): {
    average: number | null;
    min: number | null;
    max: number | null;
    length: number;
} {
    if (numbers.length === 0) {
        return {
            average: null,
            min: null,
            max: null,
            length: 0,
        };
    }

    const length = numbers.length;
    const average = numbers[Math.floor(length / 2)];
    let min = numbers[0];
    let max = numbers[0];

    for (const num of numbers) {
        if (num < min) {
            min = num;
        }

        if (num > max) {
            max = num;
        }
    }

    return {
        average,
        length,
        min,
        max,
    };
}
