import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import NewPokemon from './Components/NewPokemon';
import EditPokemon from './Components/EditPokemon';
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
            <NewPokemon></NewPokemon>
          </Route>
          <Route exact path='/api/pokemon/edit/:id'>
            <EditPokemon></EditPokemon>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
