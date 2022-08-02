import React, { useEffect } from 'react'
import { GlobalContext } from "./GlobalContext"
import { useState } from 'react'
import axios from 'axios'
import { BASE_URL } from "../../constantes/BASE_URL"



const GlobalState = (props) => {
    
    const [restaurantes, setRestaurantes] = useState([])

    const PegarRestaurantes = () => {
        const url = `${BASE_URL}/restaurants`
        const token = localStorage.getItem("token")
        const header = {
            headers: {
                auth: token
            },
        }
        axios.get(url, header)
        .then((resp) =>{
           console.log(resp)
           setRestaurantes(resp.data.restaurants)
            
        })
        .catch((err) =>{
            console.log("Deu ruim", err.response)
        })
    }

    

    useEffect (() =>{
        PegarRestaurantes()
    }, [])
    
    const states = { restaurantes }
    const setters = { setRestaurantes }
    const requests = {PegarRestaurantes}

    const Provider = GlobalContext.Provider

    return(
        <Provider value={{states, setters, requests}}>
            {props.children}
        </Provider>
    )
}

export default GlobalState