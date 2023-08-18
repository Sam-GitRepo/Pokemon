import React, { useContext } from "react";
import { pokemonDetailsContext, showModalContext } from "../App";

const PokemonCardDetails = () => {
  const { setModel } = useContext(showModalContext);
  const {
    PokemonDetails: { image, name, weight, height, stats, type },
  } = useContext(pokemonDetailsContext);

  return (
    <>
      <aside className={`modal-container ${type}`}>
        <section className="pokemon-info-container">
          <div className="column-1">
            
            
          </div>


        </section>

      </aside>
    </>
  );
};

export default PokemonCardDetails;
