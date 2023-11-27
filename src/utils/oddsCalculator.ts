// Function to calculate factorial (n!)
const factorial = (n: number): number => {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
};

// Function to calculate combinations (nCr)
const combinations = (n: number, r: number) => factorial(n) / (factorial(r) * factorial(n - r));

export function calculateOdds(guessesCorrect: number) {
    const totalNumbers = 50;
    const numbersToPick = 7;

    const successfulCombinations = combinations(numbersToPick, guessesCorrect) * combinations(totalNumbers - numbersToPick, numbersToPick - guessesCorrect);
    const totalCombinations = combinations(totalNumbers, numbersToPick);

    const probability = successfulCombinations / totalCombinations;
    const odds = 1 / probability;

    return odds;
}