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
  }, []);

  const morePokemon = () => {
    fetchPokemon(nextUrl);
  };

  return (
    <>
      <header className="header">
        <div className="content2">
          <h2>Pokemon KingDom</h2>
          <h2>Pokemon KingDom</h2>
        </div>
      </header>

      <main className="body-container">
        {loading ? (
          <div>Loading...</div>
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
