import React, { useEffect, useState } from "react";
import { NomeApp, CardMargem, Container, Icons, NavBar, Cabecalho, Endereco, TituloEndereco, BoxEndereco, NomeRestaurante, Entrega } from "./Style";
import { goToCarrinho, goToFeed, goToPerfil } from "../../routes/Coordenator";
import { useNavigate } from "react-router-dom";
import cart from "../../assets/shopping-cart-laranja.png"
import avatar from "../../assets/avatar.png"
import home from "../../assets/homepage.png"
import { GlobalContext } from "../../componentes/global/GlobalContext";
import { useContext } from "react";
import { CardCarrinho } from "../../componentes/Cards/CardCarrinho";

const Carrinho = () => {
    const navigate = useNavigate()
    const { requests, states } = useContext(GlobalContext)
    const { PegarPerfil } = requests
    const { perfil, restauranteEscolhido, carrinho } = states
    const [soma, setSoma] = useState(0)

    useEffect(() => {
        PegarPerfil()
    }, [])


    const mapCarrinho = carrinho.map((produto) => {
        return <CardCarrinho key={produto.id} comida={produto} />
    })


    const carrinhoSoma = carrinho.map((item)=>{
        let newSomaCarrinho = soma
        let newSoma = item.price * item.amount
        setSoma(newSomaCarrinho + newSoma)
      });



    console.log(carrinho)

    return (
        <Container>
            <Cabecalho>
                <NomeApp>Meu Carrinho</NomeApp>
            </Cabecalho>

            <BoxEndereco>
                <TituloEndereco>Endereço cadastrado</TituloEndereco>
                {perfil ?
                    <Endereco>{perfil.address}</Endereco> : <p>Carregando...</p>}
            </BoxEndereco>

            {carrinho.length !== 0 ? (
                <CardMargem>
                    <NomeRestaurante>{restauranteEscolhido.name}</NomeRestaurante>
                    <Entrega>{restauranteEscolhido.address}</Entrega>
                    <Entrega>{restauranteEscolhido.deliveryTime}min</Entrega>
                    <div>{mapCarrinho}</div>
                </CardMargem>
            ) : (
                <p>Não tem pedido</p>
            )}

            <NavBar>
                <Icons onClick={() => goToFeed(navigate)} src={home} alt="home" />
                <Icons onClick={() => goToCarrinho(navigate)} src={cart} alt="cart" />
                <Icons onClick={() => goToPerfil(navigate)} src={avatar} alt="avatar" />
            </NavBar>

            <div>
                <span>SUBTOTAL</span> 
                {soma}
            </div>

        </Container>
    )
}

export default Carrinho