import { useState } from 'react'
import PokemonApplication from './components/PokemonApplication'
import './App.css'

function App() {

  const [showPokemon, setShowPokemon] = useState(false)

  return (
    <>
      <h2>Pokémon App</h2>
      <button onClick={() => setShowPokemon(!showPokemon)}>{showPokemon ? "Stäng Pokémon App" : "Starta Pokémon App"}</button>
      {showPokemon && <PokemonApplication />}
    </>
  )
}

export default App
