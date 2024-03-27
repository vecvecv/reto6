import { useEffect, useState, useContext } from "react";
import Contexto from "../contexto/Contexto";
import ItemFav from "./ItemFav";
import '../assets/style/favoritos.css'  
    

function Favoritos() {
    const { favoritos, traemeFavoritos } = useContext(Contexto)
    traemeFavoritos()
    //console.log("favoritos: ",favoritos)
    
    return ( <ul>
        {favoritos.map((favorito)=>
          <div className="cuadradito">
        <ItemFav {...favorito} key={favorito.name}></ItemFav>
        </div>)}
        </ul>);
}

export default Favoritos;   