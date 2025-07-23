const url = 'https://pokeapi.co/api/v2/pokemon/';

export const getPokemon = async (page = 1, limit = 10) => {
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

    return results;
}
