import { createContext, useEffect, useState } from "react";
import "./App.css";
import Pokemon from "./component/Pokemon";
import PokemonCardDetails from "./component/PokemonCardDetails";

export const showModalContext = createContext();
export const pokemonDetailsContext = createContext();

function App() {
  const [model, setModel] = useState(false);
  const [pokemonDetails, setPokemonDetails] = useState({});

  useEffect(() => {
    if (model) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [model]);

  return (
    <>
      <showModalContext.Provider value={{ setModel }}>
        <pokemonDetailsContext.Provider
          value={{ pokemonDetails, setPokemonDetails }}
        >
          <Pokemon />
          {model && (
            <div className="modal-wrapper">
              <PokemonCardDetails />
            </div>
          )}
        </pokemonDetailsContext.Provider>
      </showModalContext.Provider>
    </>
  );
}

export default App;
