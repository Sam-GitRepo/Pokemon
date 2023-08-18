import React, { useContext, useEffect, useState } from "react";
import { pokemonDetailsContext, showModalContext } from "../App";

const PokemonCard = ({ url }) => {
  const [info, setInfo] = useState({});
  const { setModel } = useContext(showModalContext);
  const { setPokemonDetails } = useContext(pokemonDetailsContext);

  const fetchPokemonInfo = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setInfo(data[0]);
      console.log("info", data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPokemonInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const knowMorePokemon = () => {
    setModel(true);
    setPokemonDetails(info);
  };

  return (
    <>
      <section className={`pokemon-card ${info.type}`}>
        <div className="number">#{info.id} </div>
        <img src={info.image} alt={`pic of ${info.name}`} />
        <div className="char-name">{info.name} </div>
        <div className="char-type">Type: {info.type} </div>
        <button
          onClick={knowMorePokemon}
          className={`know-more ${info.type}-button`}
        >
          Know more..
        </button>
      </section>
    </>
  );
};

export default PokemonCard;
