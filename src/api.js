export default function fetchPokemon(arrayNumbers) {
  const fetchedPokemons = [];
  for (let i = 0; i < arrayNumbers.length; i++) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${arrayNumbers[i]}`)
      .then((res) => res.json())
      .then((data) => {
        fetchedPokemons.push(data);
      });
  }
  return fetchedPokemons;
}
