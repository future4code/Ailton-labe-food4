import React, { useEffect } from 'react'
import { GlobalContext } from "./GlobalContext"
import { useState } from 'react'
import axios from 'axios'
import { BASE_URL } from "../../constantes/BASE_URL"



const GlobalState = (props) => {
    
    const [restaurantes, setRestaurantes] = useState([])
    const [perfil, setPerfil] = useState()

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
           setRestaurantes(resp.data.restaurants)
            
        })
        .catch((err) =>{
            console.log("Deu ruim", err.response)
        })
    }

    const PegarPerfil = () =>{
        const url = `${BASE_URL}/profile`
        const token = localStorage.getItem("token")
        const header = {
            headers: {
                auth: token
            },
        }
        axios.get(url, header)
        .then((resp) =>{
           console.log(resp.data.user)
           setPerfil(resp.data.user)   
        })
        .catch((err) =>{
            console.log("Deu ruim", err.response)
        })
    }

    

    useEffect (() =>{
        PegarRestaurantes()
    }, [])
    
    const states = { restaurantes, perfil }
    const setters = { setRestaurantes, setPerfil }
    const requests = {PegarRestaurantes, PegarPerfil}

    const Provider = GlobalContext.Provider

    return(
        <Provider value={{states, setters, requests}}>
            {props.children}
        </Provider>
    )
}

export default GlobalState