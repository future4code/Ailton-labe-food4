import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import { ImagemCard } from "../../constantes/ScreenContainer"
import { goToRestaurante } from "../../routes/Coordenator";

const Countainer = styled.div`
display:flex;
border: 1px solid black;
border-radius: 5px;
margin-bottom: 1rem;
margin-top: 1rem;
flex-direction: column;
border-radius: 5px;
border-color: #b8b8b8;
width: 80%;

`

const Nomechoosing = styled.div`
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

export const CardCategoria = (props) => {
    const navigate = useNavigate()
    const choosing = props.choosing
    const restaurant = props.restaurant

    return (
        <Countainer onClick={() => goToRestaurante(navigate, restaurant.id)}>
            <div>
                <ImagemCard src={choosing.logoUrl} />
            </div>
            <div>
                <Nomechoosing>{choosing.name}</Nomechoosing>
            </div>
            <Rodape>
                <span>{choosing.deliveryTime} min</span>
                <span>Frete R${choosing.shipping},00</span>
            </Rodape>
        </Countainer>
    )
}