import React, { useEffect, useContext} from 'react'
import styled from 'styled-components'
import { GlobalContext } from '../global/GlobalContext'

const ContainerPedido = styled.div`
width: 100vw;
height: 200px;
position: fixed;
bottom: 40px; //mudar para a altura do footer
background-color: #e86e5a;
padding: 0 4px;
`

const ActiveCard = () => {
    const { requests, states } = useContext(GlobalContext)
    const { PegarOrdensAtivas } = requests
    const { active, setActive } = states 

    // const data = new Date(active.createdAt)
    // const entrega = new Date(active.expiresAt)

  return (
    <ContainerPedido>
      <h4>Pedido Ativo</h4>
      <div>Restaurante: {active.restaurantName}</div>
      <div>Total: {active.totalPrice}</div>

      {/* Formatar a data */}
      <div>Hora do pedido: {`${new Date(active.createdAt)}`}</div>
      <div>Entrega: {`${new Date(active.expiresAt)}`}</div>

    </ContainerPedido>
  )
}

export default ActiveCard