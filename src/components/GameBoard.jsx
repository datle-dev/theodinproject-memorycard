function GameBoard({ pokemon, onClick }) {
  return (
    Object.keys(pokemon).map((key) => {
      return (
        <article key={key}>
          <button type="button" onClick={onClick}>
            <img src={pokemon[key].sprites.front_default} alt={key} />
            <h2>{key}</h2>
          </button>
        </article>
      );
    })
  );
}

export default GameBoard;
