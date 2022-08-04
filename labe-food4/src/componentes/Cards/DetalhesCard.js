import React, { useEffect } from "react"
import styled from "styled-components"
import { ImagemCard } from "../../constantes/ScreenContainer"
import { GlobalContext } from "../../componentes/global/GlobalContext";
import { useContext } from "react";

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

const Nomecomida = styled.div`
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
flex-direction:column;
`


export const DetalhesCard = (props) => {
    const comida = props.comida
    const { requests, states, setters } = useContext(GlobalContext)
    const { adicionaCarrinho } = requests
    const { carrinho } = states

    return (
        <Countainer>
            <div>
                <ImagemCard src={comida.photoUrl} />
            </div>
            <div>
                <Nomecomida>{comida.name}</Nomecomida>
            </div>
            <Rodape>
                <p>{comida.description}</p>
                <span>R${comida.price.toFixed(2).replace(".", ",")}</span>
                <button onClick={() => adicionaCarrinho(comida)}>Adiconar</button>
            </Rodape>
        </Countainer>
    )
}