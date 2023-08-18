import React, { useContext } from "react";
import { pokemonDetailsContext, showModalContext } from "../App";

const PokemonCardDetails = () => {
  const { setModel } = useContext(showModalContext);
  const {
    pokemonDetails: { name, weight, height, stats, type, image },
  } = useContext(pokemonDetailsContext);

  console.log("sat",stats);

  return (
    <aside className={`modal-container ${type}`}>
      <section className="pokemon-info-container">
        <div className="column-1">
          <img src={image} alt={`image of ${name}`} />
          <h3>{name} </h3>
        </div>
        <div className="column-2">
          <p>Weight: {weight} </p>
          <p>Height: {height} </p>
        </div>
        <section className={`stat-container ${type}-button`}>
          <div className="column-3">
            {stats.map(({ stat }, i) => {
              return <p key={i}>{`stat-${i + 1}: ${stat.name}`}</p>;
            })}
          </div>
          <div className="column-4">
            {stats.map(({ base_stat }, i) => {
              return <p key={i}>{`BS-${i + 1}: ${base_stat}`}</p>;
            })}
          </div>
        </section>
      </section>
      <button
        className={`close-modal ${type}-button`}
        onClick={() => setModel(false)}
      >
        X
      </button>
    </aside>
  );
};

export default PokemonCardDetails;
