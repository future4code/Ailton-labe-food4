import styled from "styled-components"

export const Container = styled.div`
height: 100%;
position: relative;
width: 100vw;
height: 100vh;
display: flex; 
flex-direction: column; 
border: 1px solid black;   
`   

export const Cabecalho = styled.div`
width: 100vw;
display: flex;
justify-content: center;
align-items: flex-end;
padding-top:0.5rem;
padding-bottom:0.5rem;
font-size: 16px;
border-bottom: 1px solid rgba(0, 0, 0, 0.25);
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

export const Cards = styled.div `
display:flex;
flex-direction: column;
align-items: center;
height:80%;
overflow: scroll;
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
justify-content: space-around;
align-items: center;
background-color: white;
width: 100%;
height: 40px;
position: fixed;
    bottom:0;
    left: 0;
`

export const Pesquisa = styled.input `
display: flex;
width: 80%;
height: 3rem;
justify-content:center;
align-items: center;
border-color: rgba(0, 0, 0, 0.25);
border-radius: 3px;
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