import styled from "styled-components"

export const Container = styled.div`
position: relative;
width: 100vw;
height: 100vh;
display: flex; 
flex-direction: column; 
border: 1px solid black;    
` 

export const AreaBotao = styled.div`
 display: flex;
align-items: center;
justify-content: center;

`

export const BotaoEstilo = styled.button`
 border-radius: 3px;
border-style: none;
background-color: #e86e5a;
width: 80%;
height: 2rem;
` 

export const TextoBotao = styled.div`
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.39px;
  color: #000;
` 


export const LogoRappi = styled.img`
    width: 104px;
    height: 58px;
    object-fit: contain;
` 

export const DivLogo = styled.div`
display: flex;
margin-top: 3rem;
margin-bottom: 3rem;
justify-content: center;
`

export const Back = styled.img`
width: 23px;
height: 24px;
margin: 10px 321px 0 16px;
object-fit: contain;
`

export const Titulo = styled.span`
   display: flex;
justify-content: center;
align-items:center;
margin-bottom: 1rem;
    font-family: Roboto;
    font-size: 16px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    color: #000;
` 

export const DivInput = styled.div`
display: flex;
flex-direction: column; 
align-items: center;
`
export const Input = styled.input`
width: 80%;
height:3rem;
border-color: #E5E5EA;
margin-bottom: 1rem;
border-radius: 5px;
`

export const Cabecalho = styled.div`
display:flex;
align-items: center;
height: 2rem;
font-size: 16px;
border-bottom: 1px solid rgba(0, 0, 0, 0.25);
padding-bottom:0.5rem;
`

