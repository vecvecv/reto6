import Contexto from "./Contexto";
import Reducer from "./Reducer";
import { useReducer } from "react";
import axios from "axios";
import { useEffect } from "react";

function UsarContexto(props) {
    const {children} = props;
    // Hay favoritos en el localstorage?
    const favoritosGuardados = JSON.parse(localStorage.getItem("favoritos"));

    const estadoInicial = {
        pokemones: [{name:"pikacu", url:""}],
        favoritos: favoritosGuardados ? favoritosGuardados : [{ name: "pikacuenfav", url: "" }],
    };
    const [state, dispatch] = useReducer(Reducer, estadoInicial)

    const saludar = (nombre)=>{
        alert("hola" + nombre);
    }

    const traemePokemones = async ()=>{ 
        const res = await axios.get("https://pokeapi.co/api/v2/pokemon")
        dispatch({type:"LISTAME_POKEMONES", payload: res.data.results })
    }

    const guardamePokemon = (item)=>{
        //  console.log("se activo guardamePokemon")
        dispatch({type:"GUARDAME_POKEMONES", payload: item })
        //console.log("favoritos: ",state.favoritos)
        // Guardar favoritos en local storage
        localStorage.setItem("favoritos", JSON.stringify([...state.favoritos, item]));

    }

    const traemeFavoritos = async ()=>{
        const res = await axios.get("https://pokeapi.co/api/v2/pokemon")
        const favoritosGuardados = localStorage.getItem("favoritos");
        //dispatch({type:"DAME_POKEMONES", payload:res.state.favoritos })
        if (favoritosGuardados) {
            dispatch({ type: "DAME_POKEMONES", payload: JSON.parse(favoritosGuardados) });
        }
    }

    const eliminamePokemon = (item2)=>{
        //console.log("se activo eliminamePokemon")
        dispatch({type:"ELIMINAME_POKEMONES",  payload: item2 })
        // Actualizar favoritos en local storage después de eliminar
        const nuevosFavoritos = state.favoritos.filter((favorito) => favorito.name !== item2.name);
        localStorage.setItem("favoritos", JSON.stringify(nuevosFavoritos));

    }

    useEffect(() => {
        // Guardar favoritos en el almacenamiento local cada vez que cambie el estado de los favoritos
        localStorage.setItem("favoritos", JSON.stringify(state.favoritos));
    }, [state.favoritos]);

    return(<>
         <Contexto.Provider value={{ saludar, traemePokemones, guardamePokemon, pokemones:state.pokemones, traemeFavoritos, favoritos:state.favoritos, eliminamePokemon }}>
        {children}
        </Contexto.Provider>
        </>);
}

export default UsarContexto;