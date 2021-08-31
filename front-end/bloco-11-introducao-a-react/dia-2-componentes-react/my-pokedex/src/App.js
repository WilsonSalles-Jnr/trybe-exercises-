import './App.css';
import './pokedex.css'
import pokemons from './data';
import ListPokemon from './ListarPokemons';
function App() {
  return (
    <>
    <ListPokemon data={pokemons}/>
    </>
  );
}

export default App;
