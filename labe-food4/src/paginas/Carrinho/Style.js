import styled from "styled-components"

export const Container = styled.div`
position: relative;
width: 100vw;
height: 100vh;
display: flex; 
flex-direction: column; 
border: 1px solid black;   
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

export const BoxEndereco = styled.div`
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
padding-bottom: 0.1rem;
height:80%;
overflow: scroll;
`
export const CardMargem2 = styled.div`
 flex-direction: column; 
 display: flex;
 align-items: center;
`
export const FormadePagamento = styled.p `
border-bottom: 1px solid black;
margin: 4px 8px 0 16px;
`
export const InputPagamento = styled.div `
margin: 4px 8px 0 16px;
`
export const PagamentoBotao = styled.button `
margin: 4px 8px 0 16px;
height: 3rem;
background-color: #e86e5a;
border: none;
border-radius: 3px;
margin-top: 0.5rem;
margin-bottom: 2rem;
`
export const SubTotal = styled.p `
text-align: right;
margin-right:2rem;
`
export const Frete = styled.p `
text-align: right;
margin-right:2rem;
`
export const Total = styled.p `
text-align: right;
margin-right:2rem;
color: #E86E5A;
`
