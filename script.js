// Customer Information
const startingCapital = 10000;
const monthlyInvest = 200;
const duration = 15;
const annualReturn = 0.07;

// Calculation Basis
const monthsPerYear = 12;

console.log("Investment Growth Summary");
console.log("-------------------------");

const durationInMonths = duration * monthsPerYear;
console.log("Duration in Months: " + durationInMonths);

const totalInvest = startingCapital + (monthlyInvest * durationInMonths);
console.log("Total Investment: " + totalInvest);

const finalValue = totalInvest * (1 + annualReturn * duration);
console.log("Final Value: " + finalValue);

const roundedFinalValue = Math.round(finalValue);
console.log("Rounded Final Value: " + roundedFinalValue);

const capitalGain = finalValue - totalInvest;
console.log("Capital Gain: " + capitalGain);

const roundedCapitalGain = Math.round(capitalGain);
console.log("Rounded Capital Gain: " + roundedCapitalGain);

const evaluationHigh = "High";
const evaluationMedium = "Medium";
const evaluationLow = "Low";

// Growth rate based on profit compared to total invested money
const growthRate = roundedCapitalGain / totalInvest;
console.log("Growth Rate: " + growthRate);

if (growthRate >= 0.75) {
  console.log("Evaluation: " + evaluationHigh);
} else if (growthRate >= 0.25) {
  console.log("Evaluation: " + evaluationMedium);
} else {
  console.log("Evaluation: " + evaluationLow);
}