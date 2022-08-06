import React, { useEffect, useContext } from 'react'
import styled from 'styled-components'
import { GlobalContext } from '../global/GlobalContext'

const ContainerPedido = styled.div`
width: 420px;
height: 8rem;
position: fixed;
bottom: 1.7rem; //mudar para a altura do footer
background-color: #e86e5a;
padding: 0 4px;
display: flex;
`

const TextoPedido = styled.div`
color: white
`
const TextoTotal = styled.div`
font-weight: bold;
`
const Div1 = styled.div`
width: 70px;
margin-top: 3rem;
margin-left: 1.5rem;
margin-right: 1rem;
`
const Div2 = styled.div`
width: 320px;
margin-top: 2rem;
`

const ActiveCard = () => {
  const { requests, states } = useContext(GlobalContext)
  const { PegarOrdensAtivas } = requests
  const { active, setActive } = states

  // const data = new Date(active.createdAt)
  // const entrega = new Date(active.expiresAt)

  return (
    <ContainerPedido>
      <Div1>Relogio</Div1>
      <Div2>
        <TextoPedido>Pedido em andamento</TextoPedido>
        <div>Restaurante: {active.restaurantName}</div>
        <TextoTotal>TOTAL:R$ {active.totalPrice}</TextoTotal>
      </Div2>
    </ContainerPedido>

    /* <div>Hora do pedido: {`${new Date(active.createdAt)}`}</div>
    <div>Entrega: {`${new Date(active.expiresAt)}`}</div> */

  )
}

export default ActiveCard