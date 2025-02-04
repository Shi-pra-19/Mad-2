/*
 * calculateSimpleInterest calculates and returns the simple interest
 * (floor value) for a fixed deposit. Formula used is,

 * calculateSimpleInterest calculates and returns the simple interest
 * for a fixed deposit. Formula used is,
 * Simple Interest: P X R X T / 100
 *   where:
 *   P = Principal
 *   I = Daily interest rate
 *   N = Number of days
 *
 *  In case of any input error (wrong date format, alphabets in daily interest etc.), return -1
 *
 * @param {number} principal  - Principal amount
 * @param {number} dailyInterest  - daily interest rate
 * @param {string} startingDate  - Starting date of the fixed deposit in "YYYY-MM-DD" format, example "2015-03-25"
 * @param {string} endingDate  - Ending date of the fixed deposit in "YYYY-MM-DD" format, example "2015-03-25"
 * @return {number} interest
*/

/*
 * calculateCompoundInterest calculates and returns the compound interest
 * (floor value) for a fixed deposit. Formula used is,
 *   Compound Interest=P[(1+I/100)^N - 1]
 *   where:
 *   P = Principal
 *   I = Daily interest rate
 *   N = Number of days
 *
 *  In case of any input error (wrong date format, alphabets in daily interest etc.), return -1
 *
 * @param {number} principal  - Principal amount
 * @param {number} dailyInterest  - daily interest rate
 * @param {string} startingDate  - Starting date of the fixed deposit in "YYYY-MM-DD" format, example "2015-03-25"
 * @param {string} endingDate  - Ending date of the fixed deposit in "YYYY-MM-DD" format, example "2015-03-25"
 * @return {number} interest
*/

/*
 * extraAmountPercentage calculates and returns the extra amount percentage borrower will have to pay in case of
 * compound interest (floor value) in comparison to the simple interest for a fixed deposit.

 *  In case of any input error (wrong date format, alphabets in daily interest etc.), return -1
 *
 * @param {number} principal  - Principal amount
 * @param {number} dailyInterest  - Daily interest rate.
 * @param {string} startingDate  - Starting date of the fixed deposit in "YYYY-MM-DD" format, example "2015-03-25"
 * @param {string} endingDate  - Ending date of the fixed deposit in "YYYY-MM-DD" format, example "2015-03-25"
 * @return {number} percentage
*/

function calculateSimpleInterest(principal, dailyInterest, startingDate, endingDate) {
  // Validate inputs
  if (isNaN(principal) || isNaN(dailyInterest) || isNaN(Date.parse(startingDate)) || isNaN(Date.parse(endingDate))) {
    return -1;
  }

  // Parse dates
  const start = new Date(startingDate);
  const end = new Date(endingDate);

  // Calculate number of days
  const timeInMillis = end - start;
  if (timeInMillis < 0) return -1; // Invalid date range

  const days = timeInMillis / (1000 * 3600 * 24);

  // Simple Interest formula: P * R * T / 100
  const interest = Math.floor((principal * dailyInterest * days) / 100);
  return interest;
}

function calculateCompoundInterest(principal, dailyInterest, startingDate, endingDate) {
  // Validate inputs
  if (isNaN(principal) || isNaN(dailyInterest) || isNaN(Date.parse(startingDate)) || isNaN(Date.parse(endingDate))) {
    return -1;
  }

  // Parse dates
  const start = new Date(startingDate);
  const end = new Date(endingDate);

  // Calculate number of days
  const timeInMillis = end - start;
  if (timeInMillis < 0) return -1; // Invalid date range

  const days = timeInMillis / (1000 * 3600 * 24);

  // Compound Interest formula: P[(1 + I/100)^N - 1]
  const compoundInterest = Math.floor(principal * (Math.pow(1 + dailyInterest / 100, days) - 1));
  return compoundInterest;
}

function extraAmountPercentage(principal, dailyInterest, startingDate, endingDate) {
  // Validate inputs
  if (isNaN(principal) || isNaN(dailyInterest) || isNaN(Date.parse(startingDate)) || isNaN(Date.parse(endingDate))) {
    return -1;
  }

  // Calculate Simple Interest
  const simpleInterest = calculateSimpleInterest(principal, dailyInterest, startingDate, endingDate);
  if (simpleInterest === -1) return -1;

  // Calculate Compound Interest
  const compoundInterest = calculateCompoundInterest(principal, dailyInterest, startingDate, endingDate);
  if (compoundInterest === -1) return -1;

  // Calculate extra amount percentage
  const extraAmount = compoundInterest - simpleInterest;
  const percentage = Math.floor((extraAmount / simpleInterest) * 100);
  return percentage;
}
