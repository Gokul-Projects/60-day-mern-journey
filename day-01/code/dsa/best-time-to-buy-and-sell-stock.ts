function maxProfit(prices: number[]): number {
  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    const currentPrice = prices[i];
    const profitToday = currentPrice - minPrice;

    if (profitToday > maxProfit) {
      maxProfit = profitToday;
    }

    if (currentPrice < minPrice) {
      minPrice = currentPrice;
    }
  }

  return maxProfit;
}
