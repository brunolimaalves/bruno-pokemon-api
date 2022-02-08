import { useDispatch, useSelector } from "react-redux";
import { fetchPokemons, getInfo } from "../actions/PokemonActions";

import { useEffect } from "react";

import { PokemonList } from "../components/PokemonList";
import { PokemonDetail } from "../components/PokemonDetail";
import { PokemonSearch } from "../components/PokemonSearch";

const Pokemon = () => {
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.pokemon);
  const selectedPokemon = useSelector((state) => state.pokemon.selected);

  useEffect(() => {
    init(1);
  }, []);

  const init = (page = 1) => {
    dispatch(fetchPokemons(page));
  };

  const getPokemonInfo = (pokemon) => {
    dispatch(getInfo(pokemon));
  };

  return (
    <div>
      <PokemonSearch getInfo={getPokemonInfo} />
      {!selectedPokemon?.id ? (
        <PokemonList onClickGetInfo={getPokemonInfo} pokemon={pokemon} />
      ) : (
        <PokemonDetail info={selectedPokemon} />
      )}
    </div>
  );
};

export default Pokemon;
