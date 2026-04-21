'use client'

import { useEffect, useState } from 'react'
import { calculatePortfolio } from '../../lib/services/portfolio'
import PortfolioChart from '@/components/PortfolioChart'
import { getAssets } from '../../lib/services/assetService'


export default function Dashboard() {
  const [assets, setAssets] = useState<any[]>([])
  const [total, setTotal] = useState(0)

  useEffect(() => {
    async function load() {
      const data = await getAssets()
      setAssets(data)

      const totalValue = await calculatePortfolio(data)
      setTotal(totalValue)
    }

    load()
  }, [])

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Portfolio</h1>
      <p>Total: ${total}</p>

      {assets.map(asset => (
        <div key={asset.id} className="border p-2 mt-2">
          <p>{asset.name}</p>
          <p>{asset.quantity}</p>
        </div>
      ))}

    </div>
  )
}