import styled from "styled-components"

export const Container = styled.div`
position: relative;
width: 100vw;
height: 100vh;
display: flex; 
flex-direction: column; 
border: 1px solid black;   
`   

export const NomeOrdem = styled.h3`
color: #E86E5A
` 

export const CardTodasOrdens = styled.div`
display: flex;
flex-direction: column;
margin: 8px;
padding: 8px;
border: 1px solid #b8b8b8;
border-radius: 8px;
` 

export const Historico = styled.div`
margin-right: 1rem;
margin-left: 1rem;
font-family: Roboto;
font-size: 16px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.39px;
color: #000;
` 

export const Linha = styled.div`
margin-right: 1rem;
margin-left: 1rem;
border: solid 1px #000;
`

export const BoxEndereco = styled.div`
margin: 1rem 0;
padding: 1rem;
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

export const Cabecalho = styled.div`
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

export const DadosPessoal = styled.div `
display:flex;
flex-direction: column;
margin-top: 0.5rem;
margin-bottom: 0.5rem;
margin-left: 0.5rem;
position: relative;
`

export const PerfilLetras = styled.span `
display:flex;
margin-bottom: 0.5rem;
margin-left: 0.5rem;
`
export const BotaoEditar = styled.img `
position: absolute;
left: 21rem;
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
export const Icons = styled.img`
width: 27px;
height: 27px;
object-fit: contain;
`

export const Mensagem = styled.p`
margin-right: 1rem;
margin-left: 1rem;
`
