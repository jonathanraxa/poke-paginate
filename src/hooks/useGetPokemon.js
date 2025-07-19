import { useCallback } from 'react';
import { useEffect, useState } from 'react';

const url = 'https://pokeapi.co/api/v2/pokemon/';

export const useGetPokemon = ({ limit, searchTerm }) => {
  const [allPokemon, setAllPokemon] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchAllPokemon = useCallback(async () => {
    setLoading(true);
    try {
      // Calculate offset based on page
      const offset = (page - 1) * limit;

      const params = new URLSearchParams({
        limit: limit.toString(),
        offset: offset.toString(),
      });

      const res = await fetch(`${url}?${params.toString()}`);
      const pokemon = await res.json();

      const results = await Promise.all(
        pokemon.results.map(async ({ name, url }) => {
          const result = await fetch(url);
          const individual = await result.json();
          return {
            name,
            img: individual.sprites?.front_default || individual.sprites?.back_default,
            stats: individual.stats
          };
        })
      );

      setAllPokemon(results);
      setTotal(Math.ceil(pokemon.count / limit));
    } catch (err) {
      console.error('Failed to fetch Pokémon:', err);
    } finally {
      setLoading(false);
    }
  }, [limit, page]);

  useEffect(() => {
    fetchAllPokemon();
  }, [fetchAllPokemon]);

  return {
    allPokemon,
    total,
    setPage,
    page,
    loading,
  }
}