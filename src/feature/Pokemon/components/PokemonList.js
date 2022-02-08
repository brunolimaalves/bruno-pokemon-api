import _ from "lodash";

export const PokemonList = ({ pokemon, onClickGetInfo }) => {
  if (pokemon?.loading) {
    <p>Loading...</p>;
  }

  if (!_.isEmpty(pokemon?.data)) {
    return (
      <div className="list-wrapper">
        {pokemon?.data.map((el) => {
          return (
            <div className="pokemon-item" key={el.id}>
              <p>{el.name}</p>
              <button
                onClick={() => onClickGetInfo(el.name)}
                className="bottom-color"
              >
                Detalhar
              </button>
            </div>
          );
        })}
      </div>
    );
  }

  if (pokemon?.errorMsg !== "") {
    return <p>{pokemon?.errorMsg}</p>;
  }

  return <p>Aguarde, carregando!!</p>;
};
