import '../App.css'

function Pokemon({ pokemonData }) {

    console.log(pokemonData.types)


    return (
        <div className='pokemon-card'>
            <h2>Namn: {pokemonData.name}</h2>
            <img src={pokemonData.sprites.front_default} alt={pokemonData.name} className="pokemon-image" />

            {pokemonData.types.map((type) => (
                <p key={type.slot}>Typ: {type.type.name}</p>
            ))}

            <p>Vikt: {pokemonData.weight / 10} kg</p>
            <p>Längd: {pokemonData.height / 10} m</p>
        </div>
    )

}

export default Pokemon