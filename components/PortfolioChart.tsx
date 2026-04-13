'use client'

import { LineChart, Line, XAxis, YAxis } from 'recharts'

export default function PortfolioChart({ data }: any) {
  return (
    <LineChart width={300} height={200} data={data}>
      <XAxis dataKey="date" />
      <YAxis />
      <Line type="monotone" dataKey="total_value" />
    </LineChart>
  )
}