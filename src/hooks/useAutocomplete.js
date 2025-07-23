import { useState, useEffect } from 'react';
import { getPokemon } from '../api/pokemon';

export const useAutocomplete = () => {
    const [autoCompleteList, setAutoCompleteList] = useState([]);

    const handleFilterPokemon = async (query) => {
        if (query === '') {
            setAutoCompleteList([]);
            return;
        };
        const pokemon = await getPokemon();
        setAutoCompleteList(pokemon.map(p => p.name).filter(p => p.includes(query)));
    }

    return { autoCompleteList, setAutoCompleteList, handleFilterPokemon };
}
