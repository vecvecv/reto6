import { Link } from "react-router-dom";
import { useContext } from "react";
import Contexto from "../contexto/Contexto";

function ItemFav(props) {
    const {name, url} = props
    const {eliminamePokemon} = useContext(Contexto)

    let urlCortada = url.split("/")
    let handleEliminar = ()=>{
        
        eliminamePokemon({name:name})
    }
    //console.log(urlCortada)

    return (          <>
        <li> <Link to={"/pokemones/"+urlCortada[6]}>{name}</Link> <button onClick={handleEliminar} className="btnEliminar"> <img src='src/assets/eliminar.png' className="trash" /></button></li>
        </>);
}

export default ItemFav;