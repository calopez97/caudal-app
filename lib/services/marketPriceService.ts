export async function getMarketPrice(symbol: string) {
  const res = await fetch(
    `https://api.coingecko.com/api/v3/simple/price?ids=${symbol}&vs_currencies=usd`
  )

  const data = await res.json()
  return data[symbol]?.usd || 0
}