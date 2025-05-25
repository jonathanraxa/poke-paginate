import { useEffect, useState } from 'react';

const url = 'https://pokeapi.co/api/v2/pokemon/';

export const useGetUniquePokemon = ({ pokemonId }) => {
    const [uniquePokemon, setUniquePokemon] = useState([]);
    const [page, setPage] = useState(0);
    const [total, setTotal] = useState();
  
    useEffect(() => {
        const fetchData = async () => {
          const res = await fetch(`${url}?${pokemonId}`);
          const pokemon = await res.json();
          console.log(pokemon);
          setUniquePokemon(pokemon.results);
          setTotal(pokemon.count);
        };
        fetchData();
      }, [pokemonId]);

    return {
        uniquePokemon,
        total,
        setPage,
        page,
    }
}