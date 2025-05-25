import { useEffect, useState } from 'react';

const url = 'https://pokeapi.co/api/v2/pokemon/';

export const useGetPokemon = ({ limit }) => {
    const [pokemon, setPokemon] = useState([]);
    const [page, setPage] = useState(0);
    const [total, setTotal] = useState();
  
    useEffect(() => {
        const fetchData = async () => {
          const params = new URLSearchParams({
            limit,
            offset: page,
          });
          const res = await fetch(`${url}?${params.toString()}`);
          const pokemon = await res.json();
          console.log(pokemon);
          setPokemon(pokemon.results);
          setTotal(pokemon.count);
        };
        fetchData();
      }, [page, limit]);

    return {
        pokemon,
        total,
        setPage,
        page,
    }
}