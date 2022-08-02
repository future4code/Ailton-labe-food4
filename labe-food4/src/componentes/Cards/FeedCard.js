import React, { useState } from "react"
import styled from "styled-components"

const Countainer = styled.div`
display:flex;
border: 1px solid black;
border-radius: 5px;
margin-bottom: 1rem;
margin-top: 1rem;
flex-direction: column;
width: 80%;
border-radius: 5px;
border-color: rgba(0, 0, 0, 0.25);
`
const Imagem = styled.img`
width: 100%;
`

const NomeRestaurante = styled.div`
color: #e86e5a;
margin-top: 0.5rem;
margin-left: 1rem;
`

const Rodape = styled.div`
color: gray;
display: flex;
margin-left: 1rem;
margin-right: 1rem;
margin-bottom: 0.5rem;
justify-content: space-between;

`


export const FeedCard = (props) => {
    const restaurante = props.restaurante


    return (
        <Countainer>
            <div>
                <Imagem src={restaurante.logoUrl} />
            </div>
            <div>
                <NomeRestaurante>{restaurante.name}</NomeRestaurante>
            </div>
            <Rodape>
                <span>{restaurante.deliveryTime} min</span>
                <span>Frete R${restaurante.shipping},00</span>
            </Rodape>
        </Countainer>
    )
}