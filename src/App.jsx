import { useEffect, useState } from 'react';
import './styles/App.css';
import GameBoard from './components/GameBoard.jsx';
import ScoreBoard from './components/ScoreBoard';
import { fetchAll, createRandIntArray, randomizeArrayOrder } from './scripts/utility.js';

function App() {
  const [pokemon, setPokemon] = useState({});
  const [order, setOrder] = useState([])
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
      const pokemonOrder = randomizeArrayOrder(Object.keys(pokemonObject));
      setOrder(pokemonOrder);
      setIsLoading(false);
    });
  }, []);

  function handlePokemonSelect(e) {
    let pokemonName = e.target.getAttribute('data-key');
    console.log(pokemonName);
    const pokemonOrder = randomizeArrayOrder(Object.keys(pokemon));
    setOrder(pokemonOrder);
  }

  if (isLoading) {
    return <p>Loading...</p>;
  } else {
    return (
      <>
        <header>
          <h1>Pokemon Memory Card</h1>
          <p>
            Earn points by clicking on Pokemon, but don&apos;t click on any
            Pokemon more than once!
          </p>
        </header>
        <main>
          <ScoreBoard points={points} best={best} />
          <GameBoard pokemon={pokemon} order={order} onClick={handlePokemonSelect} />
        </main>
      </>
    );
  }
}

export default App;
