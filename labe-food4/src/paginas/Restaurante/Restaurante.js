import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { GlobalContext } from "../../componentes/global/GlobalContext";
import { FeedCard } from "../../componentes/Cards/FeedCard"
import { NomeApp, Container, Cabecalho, CardGeral, ImagemCard, NomeRestaurante, Entrega, FreteETempo, Back } from "./Style";
import { goToCarrinho, goToFeed, goToPerfil } from "../../routes/Coordenator";
import { useNavigate, useParams } from "react-router-dom";
import { goToCadastroEndereco } from "../../routes/Coordenator";
import { Carousel } from "react-responsive-carousel";
import { DetalhesCard } from "../../componentes/Cards/DetalhesCard";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import back from "../../assets/back.png"

import {useProtectedPage} from "../../hooks/useProtectedPage"

const Restaurantes = () => {
    const navigate = useNavigate()
    const params = useParams()
    const { states, setters, requests } = useContext(GlobalContext)
    const { restauranteEscolhido, categoria } = states
    const { setRestauranteEscolhido, setCategoria } = setters
    const { verDetalhes } = requests
    useProtectedPage()

    useEffect(() => {
        verDetalhes(params.id, goToCadastroEndereco, navigate );
    }, [])

    const filtroBebida = categoria.filter(produto => {
        return produto.category === "Bebida"
    })

    const mapeandoBebida = filtroBebida.map((bebida) => {
        return <DetalhesCard key={bebida.id} comida={bebida} />
    })

    const filtroAcompanhamento = categoria.filter(produto => {
        return produto.category === "Acompanhamento"
    })

    const mapeandoAcompanhamento = filtroAcompanhamento.map((bebida) => {
        return <DetalhesCard key={bebida.id} comida={bebida} />
    })

    const filtroPrincipal = categoria.filter(produto => {
        return produto.category !== "Bebida" && produto.category !== "Acompanhamento"
    })

    const mapeandoPrincipal = filtroPrincipal.map((bebida) => {
        return <DetalhesCard key={bebida.id} comida={bebida} />
    })

    return (
        <Container>
            <Cabecalho>
                <Back onClick={() => goToFeed(navigate)} src={back} />
                <NomeApp>Restaurante</NomeApp>
            </Cabecalho>
            
            <CardGeral>
                <ImagemCard src={restauranteEscolhido.logoUrl} />
                <NomeRestaurante> {restauranteEscolhido.name} </NomeRestaurante>
                <Entrega>{restauranteEscolhido.category}</Entrega>
                <FreteETempo>
                    <Entrega>{restauranteEscolhido.deliveryTime} min</Entrega>
                    <Entrega>Frete:R${restauranteEscolhido.shipping},00</Entrega>
                </FreteETempo>
                <Entrega>{restauranteEscolhido.address}</Entrega>
            </CardGeral>
             

            <div>
                <p>Produdos Principais</p>
                {mapeandoPrincipal}

                <p>Acompanhamentos</p>
                {mapeandoAcompanhamento.length !== 0 ? mapeandoAcompanhamento : <p>Não há acompanhamento!</p>}

                <p>Bebidas</p>

                {mapeandoBebida}

            </div>

        </Container>
    )
}

export default Restaurantes