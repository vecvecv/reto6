//TYPES
//declaro una variable que tiene dentro de si misma una variable

const LISTAME_POKEMONES = "LISTAME_POKEMONES"
const DAME_POKEMONES = "DAME_POKEMONES"
const GUARDAME_POKEMONES = "GUARDAME_POKEMONES"
const ELIMINAME_POKEMONES = "ELIMINAME_POKEMONES"

export default function Reducer(state, action){
    const { payload, type } = action
    switch(type){
        case LISTAME_POKEMONES: 
            return {...state, pokemones: payload}
        
        case GUARDAME_POKEMONES:
            return {...state, 
                favoritos: [...state.favoritos, payload]}
        
        case DAME_POKEMONES:
            return {...state, pokemones: state.favoritos }
            
        case ELIMINAME_POKEMONES:
            return {...state, 
                favoritos: state.favoritos.filter((favorito) => favorito.name !== payload.name) }                    

        
    }
}