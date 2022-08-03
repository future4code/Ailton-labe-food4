import styled from "styled-components"

export const Container = styled.div`
height: 100%;
`   

export const Cabecalho = styled.h3 `
display:flex;
justify-content:center;
font-size: 16px;
border-bottom: 1px solid rgba(0, 0, 0, 0.25);
padding-bottom:0.5rem;
`

export const NomeApp = styled.div`
width: 48px;
height: 19px;
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

export const Cards = styled.div `
display:flex;
flex-direction: column;
align-items: center;
`

export const ContainerPesquisa = styled.div `
display: flex;
justify-content: center;
margin-top: 0.5rem;
margin-bottom: 0.5rem;

`

export const Icons = styled.img`
width: 27px;
height: 27px;
object-fit: contain;
`

export const NavBar = styled.div`
display: flex;
justify-content:space-around;
align-items: center;
height: 49px;
`

export const Pesquisa = styled.input `
display: flex;
width: 80%;
height: 2rem;
justify-content:center;
align-items: center;
border-color: rgba(0, 0, 0, 0.25);
border-radius: 5px;
`

export const Categorias = styled.button`
    
    cursor: pointer;
    margin: 0 2.8rem 0 0;
    padding: 2rem;
    color: #E86E5A;
    font-weight: bold;
    background-color: Transparent;
    background-repeat:no-repeat;
    border: none;
    cursor:pointer;
    overflow: hidden;
    ::-webkit-scrollbar {
        display: none;
    }        
`