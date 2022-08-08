import React, { useContext } from 'react'
import styled from 'styled-components'
import { GlobalContext } from '../global/GlobalContext'
import relogio from '../../assets/relogio.png'
import Moment from 'moment';


const ContainerPedido = styled.div`
width: 100%;
height: 8rem;
position: fixed;
bottom: 40px;
background-color: #e86e5a;
padding: 0 4px;
display: flex;
`
const TextoPedido = styled.div`
color: white;
margin-bottom: 4px;
`
const TextoTotal = styled.div`
font-weight: bold;
margin-top: 4px;
`
const Relogio = styled.img`
width: 32px;
object-fit: contain;
margin-left: 1.5rem;
margin-right: 1rem;
`
const Pedido = styled.div`
width: 320px;
margin-top: 2rem;
`

const ActiveCard = () => {
  const { states } = useContext(GlobalContext)
  const { active } = states

  var data = `${new Date(active.expiresAt)}`;
  var date = Moment(data).format('HH:mm:ss');
  // formato('YYYY-MM-DDTHH:mm:ss')

  console.log(date);

  return (
    <ContainerPedido>
      <Relogio src={relogio} />
      <Pedido>
        <TextoPedido>Pedido em andamento</TextoPedido>
        <div>Restaurante: {active.restaurantName}</div>
        <div>Entrega as: {date}</div>
        <TextoTotal>TOTAL: R${Number(active.totalPrice).toFixed(2).replace(".", ",")}</TextoTotal>
      </Pedido>
    </ContainerPedido>
  )
}

export default ActiveCard