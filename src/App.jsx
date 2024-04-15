import { useEffect, useState } from 'react';
import './styles/App.css';
import ScoreBoard from './components/ScoreBoard';
import { fetchAll, createRandIntArray } from './scripts/utility.js';

function App() {
  const [pokemon, setPokemon] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [points, setPoints] = useState(0);
  const [best, setBest] = useState(points);

  useEffect(() => {
    let pokemonObject = {};
    let pokemonIndexArray = createRandIntArray(8);
    let pokemonURLArray = pokemonIndexArray.map((index) => {
      return `https://pokeapi.co/api/v2/pokemon/${String(index)}`;
    });

    fetchAll(pokemonURLArray).then((data) => {
      data.forEach((entry) => {
        pokemonObject[entry.species.name] = entry;
      });
      setPokemon(pokemonObject);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <p>Loading...</p>
    );
  } else {
    return (
      <>
        <header>
          <h1>Pokemon Memory Card</h1>
          <p>Earn points by clicking on Pokemon, but don&apos;t click on any Pokemon more than once!</p>
        </header>
        <main>
          <ScoreBoard points={points} best={best} />
          {Object.keys(pokemon).map((key) => {
            return (
              <article key={key}>
                <img src={pokemon[key].sprites.front_default} alt={key} />
                <h2>{key}</h2>
              </article>
            );
          })}
        </main>
      </>
    );
  }
}

export default App;
