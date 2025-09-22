import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export const updateSearchCount = async (searchTerm, movie) => {
  try {
    // 1. Check if searchTerm exists
    const { data: existing, error: fetchError } = await supabase
      .from('metrics')
      .select('*')
      .eq('searchTerm', searchTerm)
      .limit(1);

    if (fetchError) throw fetchError;

    // 2. If exists, update count
    if (existing && existing.length > 0) {
      const doc = existing[0];
      const { error: updateError } = await supabase
        .from('metrics')
        .update({ count: doc.count + 1 })
        .eq('id', doc.id);

      if (updateError) throw updateError;

    // 3. If not, create new record
    } else {
      const { error: insertError } = await supabase
        .from('metrics')
        .insert([{
          searchTerm,
          count: 1,
          movie_id: movie.id,
          poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        }]);

      if (insertError) throw insertError;
    }
  } catch (error) {
    console.error(error);
  }
};

export const getTrendingMovies = async () => {
  try {
    // Fetch top 5 by count descending
    const { data, error } = await supabase
      .from('metrics')
      .select('*')
      .order('count', { ascending: false })
      .limit(5);

    if (error) throw error;

    return data;
  } catch (error) {
    console.error(error);
  }
};