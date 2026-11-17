import { useState, useEffect } from 'react'
import Pokemon from './Pokemon'

function PokemonApplication() {

    const [pokemonList, setPokemonList] = useState([])
    const [selectedPokemon, setSelectedPokemon] = useState("")
    const [pokemonData, setPokemonData] = useState(null)
    console.log(pokemonData)

    useEffect(() => {
        const getPokemon = async () => {
            const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
            const data = await res.json();
            setPokemonList(data.results);
        }

        getPokemon();
    }, [])

    const getSelectedPokemon = async () => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`)
        const data = await res.json();
        setPokemonData(data)
    }

    return (
        <>
            <select onChange={(e) => setSelectedPokemon(e.target.value)}>
                <option>Välj en Pokémon</option>
                {pokemonList.map((pokemon) => (
                    <option value={pokemon.name} key={pokemon.name}>{pokemon.name}</option>
                ))}
            </select>
            <button onClick={getSelectedPokemon}>Hämta Pokémon</button>
            {pokemonData && <Pokemon pokemonData={pokemonData} />}
        </>
    )
}
export default PokemonApplication