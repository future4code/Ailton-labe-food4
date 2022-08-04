import styled from "styled-components"

export const Container = styled.div`
height: 100%;
`   

export const Cabecalho = styled.div `
display: flex;
justify-content: center;
align-items: flex-end;
height: 64px;
font-size: 16px;
border-bottom: 1px solid rgba(0, 0, 0, 0.25);
padding-bottom:1rem;
padding-top:1rem;
`

export const NomeApp = styled.div`
font-family: Roboto;
font-size: 16px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.39px;
text-align: center;
color: #000;
`

export const Icons = styled.img`
width: 27px;
height: 27px;
object-fit: contain;
`

export const NavBar = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
position: fixed;
background-color: white;
bottom: 0;
width: 100%;
height: 49px;
`

export const BoxEndereco = styled.div`
width: 360px;
height: 76px;
padding: 16px;
background-color: #eee;
position: relative;
` 

export const TituloEndereco = styled.div`
width: 328px;
height: 18px;
margin: 0 0 8px;
font-family: Roboto;
font-size: 16px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.39px;
color: #b8b8b8;
` 

export const Endereco = styled.div`
width: 328px;
height: 18px;
margin: 8px 0 0;
font-family: Roboto;
font-size: 16px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.39px;
color: #000;
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

export const CardMargem = styled.div`
padding-bottom: 2rem;
`