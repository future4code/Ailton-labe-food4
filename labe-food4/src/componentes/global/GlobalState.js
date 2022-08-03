import React, { useEffect } from 'react'
import { GlobalContext } from "./GlobalContext"
import { useState } from 'react'
import axios from 'axios'
import { BASE_URL } from "../../constantes/BASE_URL"



const GlobalState = (props) => {

    const [restaurantes, setRestaurantes] = useState([])
    const [perfil, setPerfil] = useState()
    const [historicoPedidos, setHistoricoPedidos] = useState([])
    const [categoria, setCategoria] = useState([])
    const [restauranteEscolhido, setRestauranteEscolhido] = useState({})
    const [carrinho, setCarrinho] = useState([]);
    const [carrinhoProdutos, setCarrinhoProdutos] = useState([]);
    const [restauranteAtual, setRestauranteAtual] = useState([]);

    const PegarRestaurantes = () => {
        const url = `${BASE_URL}/restaurants`
        const token = localStorage.getItem("token")
        const header = {
            headers: {
                auth: token
            },
        }
        axios.get(url, header)
            .then((resp) => {
                setRestaurantes(resp.data.restaurants)

            })
            .catch((err) => {
                console.log("Deu ruim", err.response)
            })
    }

    const PegarPerfil = () => {
        const url = `${BASE_URL}/profile`
        const token = localStorage.getItem("token")
        const header = {
            headers: {
                auth: token
            },
        }
        axios.get(url, header)
            .then((resp) => {
                setPerfil(resp.data.user)
            })
            .catch((err) => {
                console.log("Deu ruim", err.response)
            })
    }

    const PegarHistoricoPedidos = () => {
        const url = `${BASE_URL}/orders/history`
        const token = localStorage.getItem("token")
        const header = {
            headers: {
                auth: token
            },
        }
        axios.get(url, header)
            .then((resp) => {
                console.log(resp.data.orders)
            })
            .catch((err) => {
                console.log("Deu ruim", err.response)
            })
    }

    const verDetalhes = (paramsId) => {
        const token = localStorage.getItem("token")
        const header = {
            headers: {
                auth: token
            },
        }
        axios.get(`${BASE_URL}/restaurants/${paramsId}`, header)
            .then((resp) => {
                setRestauranteEscolhido(resp.data.restaurant)
                setCategoria(resp.data.restaurant.products)

            })
            .catch((err) => {
                console.log("Errou no detalhes", err.response)
            })
    }

    const adicionaCarrinho = (newItem) => {
        const index = carrinho.findIndex((i) => i.id === newItem.id);
        const newCart = [...carrinho];
        if (index === -1) {
          newCart.push({ ...newItem, amount: 1 });
        } else {
          newCart[index].amount += 1;
        }
        setCarrinho(newCart);
        alert(`${newItem.name} foi adicionado ao seu carrinho!`);
      };

    useEffect(() => {
        PegarRestaurantes()
    }, [])

    const states = {
        restaurantes, perfil, historicoPedidos, carrinho,
        carrinhoProdutos, restauranteEscolhido, categoria, restauranteAtual, 
    }
    const setters = {
        setRestaurantes, setPerfil, setHistoricoPedidos, setCarrinho, setCarrinhoProdutos,
        setRestauranteEscolhido, setCategoria, setRestauranteAtual
    }
    const requests = { PegarRestaurantes, PegarPerfil, PegarHistoricoPedidos, verDetalhes, adicionaCarrinho,
    
     }

    const Provider = GlobalContext.Provider

    return (
        <Provider value={{ states, setters, requests }}>
            {props.children}
        </Provider>
    )
}

export default GlobalState