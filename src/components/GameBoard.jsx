import { capitalizeFirst } from "../scripts/utility";

function GameBoard({ pokemon, order, onClick }) {
  return (
    <div className='game-board'>
    {order.map((name) => {
      return (
        <article className='pokemon-card' key={name}>
          <button type="button" data-key={name} onClick={onClick}>
            <img src={pokemon[name].sprites.front_default} alt={name} />
            <h2>{capitalizeFirst(name)}</h2>
          </button>
        </article>
      );
    })}
    </div>
  );
}

export default GameBoard;
