import Pokemon from "./Pokemon"

function Pokemons({pokemons}) {
console.log(pokemons)

  return (
    <div className="Pokemons">
        {pokemons.map((pokemon, index) => <Pokemon key={index} pokemon={pokemon} />)}
    </div>
  )
}

export default Pokemons