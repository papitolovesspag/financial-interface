/**
 * 1. Simple Interest
 * The baseline financial calculation.
 */
export function calculateSimpleInterest(principal, rate, time) {
  const interest = principal * (rate / 100) * time;
  const totalAmount = principal + interest;
  
  return {
    totalInterest: Number(interest.toFixed(2)),
    totalAmount: Number(totalAmount.toFixed(2))
  };
}

/**
 * 2. Compound Interest & Profits
 * Calculates future value and profit.
 */
export function calculateCompoundInterest(principal, rate, time, frequency = 12) {
  const decimalRate = rate / 100;
  const amount = principal * Math.pow((1 + decimalRate / frequency), frequency * time);
  const profit = amount - principal;
  
  return {
    totalAmount: Number(amount.toFixed(2)),
    totalProfit: Number(profit.toFixed(2))
  };
}

/**
 * 3. Loan & Mortgage Amortization
 * Calculates the fixed monthly payment required to pay off a loan.
 */
export function calculateAmortization(principal, annualRate, years) {
  const monthlyRate = (annualRate / 100) / 12;
  const totalPayments = years * 12;
  
  // Guard clause for 0% interest
  if (annualRate === 0) {
    return {
      monthlyPayment: Number((principal / totalPayments).toFixed(2)),
      totalInterest: 0,
      totalPayment: principal
    };
  }

  const monthlyPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) / 
    (Math.pow(1 + monthlyRate, totalPayments) - 1);
    
  const totalPayment = monthlyPayment * totalPayments;
  const totalInterest = totalPayment - principal;

  return {
    monthlyPayment: Number(monthlyPayment.toFixed(2)),
    totalInterest: Number(totalInterest.toFixed(2)),
    totalPayment: Number(totalPayment.toFixed(2))
  };
}

/**
 * 4. Return on Investment (ROI)
 * Calculates the percentage return on an investment.
 */
export function calculateROI(initialInvestment, finalValue) {
  const netProfit = finalValue - initialInvestment;
  const roiPercentage = (netProfit / initialInvestment) * 100;
  
  return {
    netProfit: Number(netProfit.toFixed(2)),
    roiPercentage: Number(roiPercentage.toFixed(2))
  };
}

/**
 * 5. Bill Splitting by Ratio
 * Exact amounts based on custom proportions.
 */
export function splitBillByRatio(totalAmount, ratios) {
  const totalRatio = ratios.reduce((sum, ratio) => sum + ratio, 0);
  
  if (totalRatio === 0) return ratios.map(() => 0);

  return ratios.map(ratio => {
    const share = (ratio / totalRatio) * totalAmount;
    return Number(share.toFixed(2));
  });
}

/**
 * 6. Tip & Tax Calculator
 * Handles grand totals including local tax rates and tips.
 */
export function calculateTipAndTax(billAmount, tipPercentage, taxPercentage = 0, numberOfPeople = 1) {
  const taxAmount = billAmount * (taxPercentage / 100);
  const subTotal = billAmount + taxAmount; // Tip is usually calculated on the pre-tax or post-tax amount; standard is pre-tax, but we'll apply it to the base.
  const tipAmount = billAmount * (tipPercentage / 100);
  const grandTotal = billAmount + taxAmount + tipAmount;

  return {
    taxAmount: Number(taxAmount.toFixed(2)),
    tipAmount: Number(tipAmount.toFixed(2)),
    grandTotal: Number(grandTotal.toFixed(2)),
    perPerson: Number((grandTotal / numberOfPeople).toFixed(2))
  };
}