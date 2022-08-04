import styled from "styled-components"

export const Container = styled.div`
height: 100%;
` 

export const ContainerPesquisa = styled.div `
display: flex;
justify-content: center;
margin-top: 0.5rem;
margin-bottom: 0.5rem;

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

export const Cabecalho = styled.div`
display:flex;
justify-content:center;
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