import { useContext } from "react";
import Contexto from "../contexto/Contexto";

function Contacto() {
    const {saludar, pokemones, traemePokemones } = useContext(Contexto)
    console.log(pokemones)
    const handleClick = ()=>{
       traemePokemones()
       console.log(pokemones)
    }

    return (<> <h1>Contacto</h1> 
    <button onClick={handleClick}>TRAEME LOS POKE</button>
    </>);
}

export default Contacto;