
export function calculateInvestmentResults({
  initialInvest,
  annualInvest,
  expectedReturn,
  Duration,
}) {
  const annualData = [];
  let investmentValue = initialInvest;

  for (let i = 0; i < Duration; i++) {
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    investmentValue += interestEarnedInYear + annualInvest;
    annualData.push({
      year: i + 1, 
      interest: interestEarnedInYear, 
      valueEndOfYear: investmentValue, 
      annualInvest: annualInvest, 
    });
  }

  return annualData;
}




export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
