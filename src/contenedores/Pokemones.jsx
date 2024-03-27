import { useEffect, useState, useContext } from "react";
import Contexto from "../contexto/Contexto";
//import axios from "axios";
import Item from "./Item";
import '../assets/style/pokemones.css'


function Pokemones() {
    const {pokemones, traemePokemones } = useContext(Contexto)

   // const [pokemones, setPokemones] = useState ([])
   // const traemeProductos = async ()=>{
   //     const res = await axios.get("https://pokeapi.co/api/v2/pokemon")
   //     setPokemones(res.data.results)
   // }

    useEffect(()=>{
    //      traemeProductos()
            traemePokemones()     
            console.log("pokemones: ",pokemones)

    },[])


    return ( <>
    <div className="contenedor">
        <ul className="darlerow">
            {pokemones.map((pokemon)=>
            <div className="pokemonesCuadradito">
             <Item {...pokemon} key={pokemon.name} pokemon={pokemon}></Item>
             </div>
            )}
        </ul>
    </div>    
    </> );
}


export default Pokemones;