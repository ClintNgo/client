import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AddPokemon from './Components/AddPokemon';
import Main from "./Main.js"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Main></Main>
          </Route>
          <Route exact path='/api/pokemon/newpokemon'>
            <AddPokemon></AddPokemon>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
