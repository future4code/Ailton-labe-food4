import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { GlobalContext } from "../../componentes/global/GlobalContext";
import {FeedCard} from "../../componentes/Cards/FeedCard"
import { Pesquisa, NomeApp, Icons, NavBar, Cards, ContainerPesquisa, Container, Cabecalho } from "./Style";
import { goToCarrinho, goToFeed, goToPerfil } from "../../routes/Coordenator";
import { useNavigate, useParams } from "react-router-dom";
import { Categorias } from "./Style";
import { Carousel } from "react-responsive-carousel";
import { DetalhesCard } from "../../componentes/Cards/DetalhesCard";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import cart from "../../assets/shopping-cart.png"
import avatar from "../../assets/avatar.png"
import home from "../../assets/homepage.png"
import axios from "axios";
import { BASE_URL } from "../../constantes/BASE_URL";

const Restaurantes = () =>{
    const navigate = useNavigate()
    const params = useParams()
    const [restauranteEscolhido, setRestauranteEscolhido] = useState({})
    const  {states} = useContext(GlobalContext)
    const {restaurantes} = states

    useEffect(() => {
        verDetalhes();
    }, [])

    const verDetalhes = () => {
        const token = localStorage.getItem("token")
        const header = {
            headers: {
                auth: token
            },
        }
        axios.get(`${BASE_URL}/restaurants/${params.id}`, header)
        .then((resp) =>{
            setRestauranteEscolhido(resp.data.restaurant)  
            console.log(resp)
         })
         .catch((err) =>{
             console.log("Errou no detalhes", err.response)
         })
    }
   
    const mapeandoComida = restauranteEscolhido.products && restauranteEscolhido.products
    .map((comida) => {
        return <DetalhesCard key={comida.id} comida={comida}/> 
    })
    
    // const categoriasFiltradas = mapeandoComida.filter((item, id) =>{
    //     return mapeandoComida.indexOf(item) === id
    // })
    // console.log(mapeandoComida)

    return (
       <Container>
        <Cabecalho>
        <button onClick={() => goToFeed(navigate)}>Voltar</button>
        <NomeApp>Restaurante</NomeApp>
        </Cabecalho>
        <div>
            <p>Produdos Principais</p>

            <p>Acompanhamentos</p>

            <p>Bebidas</p>
            
        </div>
        {mapeandoComida}
        </Container>
    )
}

export default Restaurantes