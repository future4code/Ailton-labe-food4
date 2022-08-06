import styled from "styled-components"

export const Container = styled.div`
height: 100%;
position: relative;
width: 428px;
height: 1134px;
display: flex; 
flex-direction: column; 
border: 1px solid black;   
`  

export const Cabecalho = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding-top:0.5rem;
padding-bottom:0.5rem;
font-size: 16px;
border-bottom: 1px solid rgba(0, 0, 0, 0.25);
`

export const NomeApp = styled.div`
font-family: Roboto;
`

export const CardGeral = styled.div`
    flex-direction: column; 
    display: flex;
    width: 80%;
    margin-bottom: 0.5rem;
    border-radius: 3px;
    border: solid 1px #b8b8b8;
    margin-top:1rem;
    justify-content: center;
    margin-left: 2.5rem;
`

export const Cards = styled.div `
height:80%;
overflow: scroll;
`
export const CardsMain = styled.div `
display:flex;
flex-direction: column;
align-items: center;
`

export const TituloCards = styled.p`
border-bottom: 1px solid black;
width:80%;
margin-left: 2.5rem;
`

export const ImagemCard = styled.img`
    width: 100%;
    height: 120px;
`

export const Back = styled.img`
width: 23px;
height: 24px;
object-fit: contain;
`

export const NomeRestaurante = styled.div`
    width: 296px;
    height: 18px;
    margin: 12px 16px 4px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #E86E5A;
`
export const Entrega = styled.div`
    margin: 4px 8px 0 16px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #b8b8b8;
`
export const FreteETempo = styled.div`
display:flex
`