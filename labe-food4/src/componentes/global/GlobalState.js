import React from 'react'
import { GlobalContext } from "./GlobalContext"
import { useState } from 'react'


const GlobalState = (props) => {
    
    const [pokeData, setPokeData] = useState([])
    
    const states = { pokeData }
    const setters = { setPokeData }

    
    const Provider = GlobalContext.Provider

    return(
        <Provider value={{states, setters}}>
            {props.children}
        </Provider>
    )
}

export default GlobalState