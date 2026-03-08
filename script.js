const form = document.querySelector("#investment-form");

const startingCapitalInput = document.querySelector("#starting-capital");
const monthlyContributionInput = document.querySelector("#monthly-contribution");
const durationInMonthsInput = document.querySelector("#duration-in-months");
const annualInterestRateInput = document.querySelector("#annual-interest-rate");

const totalContributionsOutput = document.querySelector("#total-contributions");
const totalInterestEarnedOutput = document.querySelector("#total-interest-earned");
const contributionsPlusInterestOutput = document.querySelector("#contributions-plus-interest");
const totalPortfolioValueOutput = document.querySelector("#total-portfolio-value");
const ratingOfReturnOutput = document.querySelector("#rating-of-return");

function formatCurrency(value) {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR"
  }).format(value);
}

function getReturnRating(interest, contributions) {

  if (contributions === 0) return "Low";

  const rate = interest / contributions;

  if (rate >= 0.75) return "High";
  if (rate >= 0.25) return "Medium";

  return "Low";
}

form.addEventListener("submit", function (event) {

  event.preventDefault();

  const startingCapital = Number(startingCapitalInput.value);
  const monthlyContribution = Number(monthlyContributionInput.value);
  const durationInMonths = Number(durationInMonthsInput.value);
  const annualInterestRate = Number(annualInterestRateInput.value) / 100;

  const monthlyRate = annualInterestRate / 12;

  let portfolio = startingCapital;

  for (let month = 1; month <= durationInMonths; month++) {

    portfolio = portfolio * (1 + monthlyRate);
    portfolio = portfolio + monthlyContribution;

  }

  const totalContributions = monthlyContribution * durationInMonths;

  const totalInterest =
    portfolio - startingCapital - totalContributions;

  const contributionsIncInterest =
    totalContributions + totalInterest;

  const rating = getReturnRating(totalInterest, totalContributions);

  totalContributionsOutput.textContent =
    formatCurrency(totalContributions);

  totalInterestEarnedOutput.textContent =
    formatCurrency(totalInterest);

  contributionsPlusInterestOutput.textContent =
    formatCurrency(contributionsIncInterest);

  totalPortfolioValueOutput.textContent =
    formatCurrency(portfolio);

  ratingOfReturnOutput.textContent = rating;

});