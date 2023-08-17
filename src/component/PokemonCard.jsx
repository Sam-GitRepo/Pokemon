import React, { useEffect, useState } from "react";

const PokemonCard = ({ url }) => {
  const [info, setInfo] = useState({});

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
  }, []);

  return (
    <>
      <section
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <div>id -{info.id} </div>
        <div>name -{info.name} </div>
        <div>type -{info.type} </div>
        <img src={info.image} alt="{name} " />
      </section>
    </>
  );
};

export default PokemonCard;
