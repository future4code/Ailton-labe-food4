import React, { useEffect } from "react"
import styled from "styled-components"
import { GlobalContext } from "../../componentes/global/GlobalContext";
import { useContext } from "react";

const Countainer = styled.div`
display:flex;
border: 1px solid black;
border-radius: 5px;
margin-top: 1rem;
border-radius: 5px;
border-color: #b8b8b8;
width: 80%;
height: 8rem;
`

const Nomecomida = styled.div`
color: #e86e5a;
margin-top: 1rem;
font-weight: bold;
`

const Rodape = styled.div`
color: gray;
display: flex;
margin-left: 1rem;
margin-bottom: 0.5rem;
justify-content: space-between;
flex-direction:column;
`
const ImagemCard = styled.img`
    width: 9rem;
    height: 100%;
`

const NomeDescricao = styled.span`
color: #D1D1D6;
margin-top: 0.3rem;
margin-bottom: 0.3rem;
`

const NomePreco = styled.span`
color: black;
margin-bottom: 1rem;
`

const NomeBotao = styled.button`
border: 1px solid black;
background-color: white;
border-radius: 3px;
`
const NomeQuantidade = styled.div`
border: 1px solid #E86E5A;
color: #E86E5A;
width: 2rem; 
height: 1.5rem;
text-align: center;
`

const FooterCard = styled.div`
display: flex;
justify-content: space-between;
`

const HeaderCard = styled.div`
display: flex;
justify-content: space-between;
`


export const CardCarrinho = (props) => {
    const comida = props.comida
    const { requests, states, setters } = useContext(GlobalContext)
    const { carrinho } = states
    const {removeToCarrinho} = requests

    

    return (
        <Countainer>
            <div>
                <ImagemCard src={comida.photoUrl} />
            </div>

            <Rodape>
                <HeaderCard>
                <Nomecomida>{comida.name}</Nomecomida>
                 <NomeQuantidade>{comida.amount}</NomeQuantidade>
                </HeaderCard>

                <NomeDescricao>{comida.description}</NomeDescricao>

                <FooterCard>
                    <NomePreco>R${comida.price.toFixed(2).replace(".", ",")}</NomePreco>
                    <NomeBotao onClick={() => removeToCarrinho(comida.id)}>Remover</NomeBotao>
                </FooterCard>
            </Rodape>
        </Countainer>
    )
}