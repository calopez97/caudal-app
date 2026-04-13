import { createClient } from '../supabase/server'

export async function getAssets() {

  const supabase = await createClient();
  const { data } = await supabase
    .from('assets')
    .select('*')

  console.log('Fetched assets:', data)
  return data || []
}