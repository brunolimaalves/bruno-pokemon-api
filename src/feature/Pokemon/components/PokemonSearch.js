import { useState } from "react";

export const PokemonSearch = ({ history, getInfo }) => {
  const [search, setSearch] = useState();
  return (
    <div className={"search-wrapper"}>
      <input
        type="text"
        placeholder="Buscar pokemon"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={() => getInfo(search)}>Buscar</button>
    </div>
  );
};
