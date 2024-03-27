import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import Contexto from "../contexto/Contexto";
import '../assets/style/pokemon.css'



function Pokemon() {
    const location = useLocation()
    const {guardamePokemon} = useContext(Contexto)
    const [pokemon, setPokemon] = useState ([])

    const traemePokemon = async ()=>{
        const pedazos = location.pathname.split("/")
        const url = "https://pokeapi.co/api/v2/pokemon/"+pedazos[2]+"/"
        const res = await axios.get(url)
        setPokemon(res.data)
        console.log("lo que viene en el json", res)
        }
    
    useEffect(()=>{
          traemePokemon()
    },[])

    let handleGuardar = ()=>{
        guardamePokemon({name:pokemon.name, url:pokemon.sprites?.front_default})
    }
     

    return ( <>
    <img src={pokemon?.sprites?.other["official-artwork"].front_default} alt="" />
    <h1 className="nombre">{pokemon?.name}</h1>

    {pokemon?.types && (
      <h2 className="tituloh2">TIPO: {pokemon.types[0]?.type?.name}</h2>
    )}

    <h2 className="tituloh2">Movimientos</h2>
    {pokemon?.moves && (
      <p className="listap">{pokemon.moves[0].move.name}</p>
    )}
    {pokemon?.moves && (
      <p className="listap">{pokemon.moves[1].move.name}</p>
    )}
    {pokemon?.moves && (
      <p className="listap">{pokemon.moves[2].move.name}</p>
    )}
    {pokemon?.moves && (
      <p className="listap">{pokemon.moves[3].move.name}</p>
    )}

    <button onClick={handleGuardar} className="botonfav">GUARDAR FAVORITO</button>
    
    </> );
}

export default Pokemon;