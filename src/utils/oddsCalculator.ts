export function calculateOdds(correctGuesses: number) {
    const totalNumbers = 50;
    const numbersToPick = 7;
  
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
  
    // Total possible combinations of 7 numbers out of 50
    const totalCombinations = combinations(totalNumbers, numbersToPick);
  
    // Calculate the number of successful combinations for each scenario
    const successfulCombinations = combinations(numbersToPick, correctGuesses) * combinations(totalNumbers-numbersToPick, numbersToPick-correctGuesses);
  
    // Calculate the odds (probability) of guessing x numbers correctly
    const probability = successfulCombinations / totalCombinations;
    const odds = 1 / probability; // Odds are the reciprocal of probability
  
    return odds;
  }