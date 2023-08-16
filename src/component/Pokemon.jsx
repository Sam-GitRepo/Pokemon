import React, { useState } from 'react'

const Pokemon = () => {
    const [pokemon, setPokemon] = useState([]);

    const fetchPokemon = async ()   => {
        try{
            const response = await fetch('https://content.newtonschool.co/v1/pr/64ccef982071a9ad01d36ff6/pokemonspages1')
            const data = await response.json()
            // console.log(data)
            setPokemon(data);
            console.log("pokemon",pokemon);
        }
        catch{
            console.log("error");
        }
    }
    const loadPokemon =  () => {
        
    }
    fetchPokemon()
  return (
   <>
   
   </>
  )
}

export default Pokemon