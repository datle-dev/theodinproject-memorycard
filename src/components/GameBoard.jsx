import { capitalizeFirst } from "../scripts/utility";

function GameBoard({ pokemon, onClick }) {
  return (
    <div className='game-board'>
    {Object.keys(pokemon).map((key) => {
      return (
        <article className='pokemon-card' key={key}>
          <button type="button" data-key={key} onClick={onClick}>
            <img src={pokemon[key].sprites.front_default} alt={key} />
            <h2>{capitalizeFirst(key)}</h2>
          </button>
        </article>
      );
    })}
    </div>
  );
}

export default GameBoard;
