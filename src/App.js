import "./App.css";
import { Switch, Route, NavLink, Redirect } from "react-router-dom";
import Pokemon from "./feature/Pokemon/containers/Pokemon";

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to={"/"}>Página Inicial</NavLink>
        <NavLink to={"/pokemons"}>Pokemons</NavLink>
      </nav>
      <Switch>
        <Route path={"/pokemons"} exact component={Pokemon} />
        <Redirect to={"/"} />
      </Switch>
    </div>
  );
}

export default App;
