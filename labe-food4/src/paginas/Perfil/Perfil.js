import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { GlobalContext } from "../../componentes/global/GlobalContext";
import { Container, Endereco, Linha, Historico, NomeApp, Mensagem, Cabecalho, CardTodasOrdens, NomeOrdem } from "./Style";
import { DadosPessoal } from "./Style";
import { PerfilLetras, TituloEndereco } from "./Style";
import { BoxEndereco } from "./Style";
import { BotaoEditar } from "./Style";
import { useNavigate } from "react-router-dom";
import { goToEditarPerfil } from "../../routes/Coordenator";
import { goToEditarEndereco } from "../../routes/Coordenator";
import { NavBar } from "./Style";
import { Icons } from "./Style";
import { goToFeed } from "../../routes/Coordenator";
import { goToCarrinho } from "../../routes/Coordenator";
import { goToPerfil } from "../../routes/Coordenator";
import cart from "../../assets/shopping-cart.png"
import avatar from "../../assets/avatar-laranja.png"
import home from "../../assets/homepage.png"
import edit from "../../assets/edit.png"


const Perfil = () => {
    const navigate = useNavigate()
    const [date, setDate] = useState(new Date())
    const { requests, states } = useContext(GlobalContext)
    const { PegarPerfil, PegarHistoricoPedidos } = requests
    const { perfil, historicoPedidos } = states

    useEffect(() => {
        PegarPerfil()
        PegarHistoricoPedidos()
    }, [])

    // map dos pedidos 
    const mapPedidos = historicoPedidos.length > 0 ? historicoPedidos.map((pedido) =>{
      const datinha = new Date(pedido.createdAt)  
      
      return (
          <CardTodasOrdens key={pedido.id}>
            <NomeOrdem>{pedido.restaurantName}</NomeOrdem>
            <div>Valor: R$ {pedido.totalPrice.toFixed(2)}</div>
            <br />
            <div>{datinha.getDate()}/{datinha.getUTCMonth() + 1}/{datinha.getFullYear()}</div>
          </CardTodasOrdens>
        )
      }) : <Mensagem>Você ainda não realizou nenhum pedido!</Mensagem>

      console.log(mapPedidos)

    return (
      <Container>
        <Cabecalho>
          <NomeApp>Meu Perfil</NomeApp> 
        </Cabecalho>
        
        {perfil ? (
          <DadosPessoal>
            <BotaoEditar
              onClick={() => goToEditarPerfil(navigate)}
              src={edit}
            ></BotaoEditar>
            <PerfilLetras>{perfil.name}</PerfilLetras>
            <PerfilLetras>{perfil.email}</PerfilLetras>
            <PerfilLetras>{perfil.cpf}</PerfilLetras>
          </DadosPessoal>
        ) : (
          <p>Carregando...</p>
        )}

        <BoxEndereco>
          <BotaoEditar
            onClick={() => goToEditarEndereco(navigate)}
            src={edit}
          ></BotaoEditar>
          <TituloEndereco>Endereço cadastrado</TituloEndereco>
          {perfil ? (
            <Endereco>{perfil.address}</Endereco>
          ) : (
            <p>Carregando...</p>
          )}
        </BoxEndereco>

        <Historico>Histórico de Pedidos</Historico>
        <Linha />

        {mapPedidos}

        <NavBar>
          <Icons onClick={() => goToFeed(navigate)} src={home} alt="home" />
          <Icons onClick={() => goToCarrinho(navigate)} src={cart} alt="cart" />
          <Icons
            onClick={() => goToPerfil(navigate)}
            src={avatar}
            alt="avatar"
          />
        </NavBar>
      </Container>
    )
}

export default Perfil