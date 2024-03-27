import { Link } from "react-router-dom";
import { useContext } from "react";
import Contexto from "../contexto/Contexto";
import '../assets/style/pokemones.css'


function Item(props) {
    const {name, url} = props
    const {guardamePokemon} = useContext(Contexto)

    let urlCortada = url.split("/")
    let idUrlCortada = urlCortada[6]
    let urlImagen = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idUrlCortada}.png`;

    let handleGuardar = ()=>{
        guardamePokemon({name:name,url:url})
    }
    console.log(urlCortada)

    return ( 
        <>
        <li className="itemli">
            <img src={urlImagen} alt={name} className="itemImg" />   
            <Link to={"/pokemones/"+urlCortada[6]}>{name}</Link> 
            <button onClick={handleGuardar} className="botonfav"><img src='src/assets/favorito.png' className="estrellaboton" /></button>
        </li>
        </>
     );
}

export default Item;
