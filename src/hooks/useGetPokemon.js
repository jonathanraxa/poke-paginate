import { useCallback } from 'react';
import { useEffect, useState } from 'react';

const url = 'https://pokeapi.co/api/v2/pokemon/';

export const useGetPokemon = ({ limit }) => {
    const [allPokemon, setAllPokemon] = useState([]);
    const [page, setPage] = useState(0);
    const [total, setTotal] = useState();

    const fetchAllPokemon = useCallback(async () => {
      try {
        const params = new URLSearchParams({
          limit,
          offset: page,
        });
  
        const res = await fetch(`${url}?${params.toString()}`);
        const pokemon = await res.json();
  
        const results = await Promise.all(
          pokemon.results.map(async ({ name, url }) => {
            const result = await fetch(url);
            const individual = await result.json();
            return {
              name,
              img: individual.sprites?.back_default,
              stats: individual.stats
            };
          })
        );
        setAllPokemon(results);
        setTotal(pokemon.count);
      } catch (err) {
        console.error('Failed to fetch Pokémon:', err);
      }
    },[limit, page]);

    useEffect(() => {
      fetchAllPokemon();
    });


    return {
        allPokemon,
        total,
        setPage,
        page,
    }
}