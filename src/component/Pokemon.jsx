import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(false);
  const [nextUrl, setNextUrl] = useState("");

  const fetchPokemon = async (url) => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      console.log(data[0]);
      setPokemon([...pokemon, ...data[0].results]);
      setNextUrl(data[0].next);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemon(
      "https://content.newtonschool.co/v1/pr/64ccef982071a9ad01d36ff6/pokemonspages1"
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const morePokemon = () => {
    fetchPokemon(nextUrl);
  };

  return (
    <>
      <header className="header-container">
        <div className="header-part-1">
          <h1>Pokemon</h1>
          <h1 className="second-h2">Pokemon</h1>
        </div>
        <div className="header-part-2">
          <h1>KingDom</h1>
          <h1 className="second-h2">KingDom</h1>
        </div>
      </header>

      <main className="body-container">
        {loading ? (
          <div style={{color:"wheat"}}>
            <h4>Loading....</h4>
          </div>
        ) : (
          <section className="card-container">
            {pokemon &&
              pokemon.map(({ url }, i) => {
                return <PokemonCard url={url} key={i} />;
              })}
          </section>
        )}
        <div>
          <button className="load-more" onClick={morePokemon}>
            More Pokemon
          </button>
        </div>
      </main>
    </>
  );
};

export default Pokemon;

