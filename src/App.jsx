import { useEffect, useState } from 'react';
import './styles/App.css';
import ScoreBoard from './components/ScoreBoard';

function App() {
  const [pokemon, setPokemon] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [points, setPoints] = useState(0);
  const [best, setBest] = useState(points);

  useEffect(() => {
    async function fetchPokemon() {
      let response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
      let data = await response.json();
      setPokemon(data);
      setIsLoading(false);
    }
    fetchPokemon();
  }, []);

  if (isLoading) {
    return (
      <p>Loading...</p>
    );
  } else {
    return (
      <>
        <h1>Pokemon Memory Card</h1>
        <p>Earn points by clicking on Pokemon, but don&apos;t click on any Pokemon more than once!</p>
        <ScoreBoard points={points} best={best} />
        <article>
          <img src={pokemon.sprites.front_default} alt={pokemon.species.name} />
          <h2>{pokemon.species.name}</h2>
        </article>
      </>
    );
  }
}

export default App;
