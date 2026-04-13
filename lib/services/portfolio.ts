import { getMarketPrice } from "./marketPriceService"

export async function calculatePortfolio(assets: any[]) {
  let total = 0

  for (const asset of assets) {
    const price =
      asset.valuation_type === 'manual'
        ? asset.current_price_manual
        : await getMarketPrice(asset.symbol)

    total += Number(asset.quantity) * Number(price)
  }

  return total
}