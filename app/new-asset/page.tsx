'use client'

import { createClient } from '@/lib/supabase/client'
import { useState } from 'react'


export default function AddAsset() {
  const supabase = createClient();
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState(0)

  const handleSave = async () => {
    const { data: user } = await supabase.auth.getUser()

    const { data: portfolio } = await supabase
      .from('portfolios')
      .select('*')
      .eq('user_id', user.user?.id)
      .single()

    await supabase.from('assets').insert({
      portfolio_id: portfolio.id,
      name,
      quantity,
      valuation_type: 'manual'
    })

    window.location.href = '/dashboard'
  }

  return (
    <div className="p-4">
      <input placeholder="Nombre" onChange={e => setName(e.target.value)} />
      <input type="number" onChange={e => setQuantity(Number(e.target.value))} />
      <button onClick={handleSave}>Guardar</button>
    </div>
  )
}