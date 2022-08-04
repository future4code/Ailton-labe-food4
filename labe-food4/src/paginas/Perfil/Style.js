import styled from "styled-components"

export const Container = styled.div`
height: 100%;
`   

export const Historico = styled.div`
width: 328px;
height: 18px;
margin: 16px 16px 8px;
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
width: 328px;
margin: 0 7px;
border: solid 1px #000;
`

export const BoxEndereco = styled.div`
width: 100%;
height: 76px;
margin: 16px 0;
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

export const Cabecalho = styled.div `
display:flex;
justify-content: center;
align-items: flex-end;
height: 64px;
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

export const DadosPessoal = styled.div `
display:flex;
flex-direction: column;
margin-top: 0.5rem;
margin-bottom: 0.5rem;
margin-left: 0.5rem;
height: 102px;
width: 328px;
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
position: fixed;
background-color: white;
bottom: 0;
width: 100%;
height: 49px;
`
export const Icons = styled.img`
width: 27px;
height: 27px;
object-fit: contain;
`
