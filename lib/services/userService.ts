import { createClient } from "../supabase/server";

export async function createPortfolioIfNotExists(userId: string) {

  const supabase = await createClient();
  const { data } = await supabase
    .from('portfolios')
    .select('*')
    .eq('user_id', userId)

  if (!data || data.length === 0) {
    await supabase.from('portfolios').insert({
      user_id: userId
    })
  }
}