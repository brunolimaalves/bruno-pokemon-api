import _ from "lodash";

export const PokemonDetail = ({ info }) => {
  if (!_.isEmpty(info)) {
    return (
      <div className={"pokemon-wrapper"}>
        <div className={"image"}>
          <h1>Imagens</h1>
          <img src={info.sprites.front_default} alt="imagem" />
        </div>
        <div className="estatisticas-abi">
          <div className="estatisticas">
            <h1>Estatísticas</h1>
            {info.stats.map((item) => {
              return (
                <div className="estatisticas-bar">
                  <label>{item.stat.name}</label>
                  <progress max="100" value={item.base_stat} />
                </div>
              );
            })}
          </div>
          <div className="habilidade">
            <h1>Habilidades</h1>
            {info.abilities.map((el) => {
              return <p>{el.ability.name}</p>;
            })}
          </div>
        </div>
      </div>
    );
  } else {
    return <h1>aaa</h1>;
  }
};
