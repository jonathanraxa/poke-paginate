import { useCallback, useRef } from 'react';
import { useEffect, useState } from 'react';
import { getPokemon } from '../api/pokemon';


export const useGetPokemon = ({ limit }) => {
  const [allPokemon, setAllPokemon] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const timerRef = useRef(null);

  const fetchAllPokemon = useCallback(async () => {
    setLoading(true);
    try {
      const results = await getPokemon(page, limit);


      setAllPokemon(results);
      setFilteredPokemon(results); // Initialize filtered list with all Pokemon
      setTotal(Math.ceil(pokemon.count / limit));
    } catch (err) {
      console.error('Failed to fetch Pokémon:', err);
    } finally {
      setLoading(false);
    }
  }, [limit, page]);


  const useDebounce = (fn, delay = 3000) => {
    return useCallback((...args) => {
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => fn(...args), delay);
    }, [fn, delay]);
  };

  const filterQuery = (searchTerm) => {
    if (!searchTerm.trim()) {
      setFilteredPokemon(allPokemon); // Show all Pokemon when search is empty
    } else {
      const filtered = allPokemon.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredPokemon(filtered);
    }
  };

  const handleSearch = useDebounce(query => filterQuery(query), 250);

  useEffect(() => {
    fetchAllPokemon();
  }, [fetchAllPokemon]);

  useEffect(() => {
    return () => {
      clearTimeout(timerRef?.current);
    }
  }, []);

  return {
    allPokemon: filteredPokemon, // Return filtered Pokemon instead of all Pokemon
    total,
    setPage,
    page,
    loading,
    handleSearch,
  }
}