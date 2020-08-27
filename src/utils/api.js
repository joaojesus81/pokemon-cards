import axios from "axios";

export const fetchPokemon = () => {
  const randPokemons = Array.from({ length: 3 }, () =>
    Math.floor(Math.random() * 151)
  );
  console.log(randPokemons);
  const fetchedPokemons = randPokemons.map((pokeIndex) => {
    return axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeIndex}`)
      .then((data) => {
        return data.data;
      });
  });

  return Promise.all(fetchedPokemons);
};
