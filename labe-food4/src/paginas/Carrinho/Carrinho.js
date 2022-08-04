import React, { useEffect, useState } from "react";
import { NomeApp, FormadePagamento, CardMargem, Container, Icons, NavBar, Cabecalho, Endereco, TituloEndereco, BoxEndereco, NomeRestaurante, Entrega } from "./Style";
import { goToCarrinho, goToFeed, goToPerfil } from "../../routes/Coordenator";
import { useNavigate } from "react-router-dom";
import cart from "../../assets/shopping-cart-laranja.png"
import avatar from "../../assets/avatar.png"
import home from "../../assets/homepage.png"
import { GlobalContext } from "../../componentes/global/GlobalContext";
import { useContext } from "react";
import { CardCarrinho } from "../../componentes/Cards/CardCarrinho";
import { BASE_URL } from "../../constantes/BASE_URL";
import axios from "axios";

const Carrinho = () => {
    const navigate = useNavigate()
    const { requests, states, setters } = useContext(GlobalContext)
    const { PegarPerfil } = requests
    const { perfil, restauranteEscolhido, carrinho, amount } = states
    const {setCarrinho, setAmount} = setters
    const [formaPagamento, setFormaPagamento] = useState("")

    useEffect(() => {
        PegarPerfil()
    }, [])


    const mapCarrinho = carrinho.map((produto) => {
        return <CardCarrinho key={produto.id} comida={produto} />
    })


    const carrinhoSoma = carrinho.map((item) => {
        return item.price * item.amount
    });
    let sum = 0;
    for (let i = 0; i < carrinho.length; i++) {
        sum += carrinhoSoma[i];
    }

    const carrinhoTotal = sum + restauranteEscolhido.shipping

    const PegarFormaPagamento = (event) =>{
        setFormaPagamento(event.target.value)
    }
    
    const FazerPedido = (carrinho, Pagamento) => {
        const url = `${BASE_URL}/restaurants/${restauranteEscolhido.id}/order`
        const token = localStorage.getItem("token")
        const body = {
            // products:[{
            //     id: carrinho.id,
            //     quantity: carrinho.amount,
            // }],
            carrinho,
            paymentMethod: Pagamento,
        }
        const header = {
            headers: {
                auth: token
            },
        }
        axios.post(url, header, body)
        .then((resp) =>{
            alert("Sucesso")
            setFormaPagamento("")
            setCarrinho("")
            setAmount(0)
            console.log(resp)
        })
        .catch((err) =>{
            console.log("Deu erro", err )
        })
    }


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

            <CardMargem>
                {carrinho.length !== 0 ? (
                    <div>
                        <NomeRestaurante>{restauranteEscolhido.name}</NomeRestaurante>
                        <Entrega>{restauranteEscolhido.address}</Entrega>
                        <Entrega>{restauranteEscolhido.deliveryTime}min</Entrega>
                        <div>{mapCarrinho}</div>
                    </div>
                ) : (
                    <p>Não tem pedido</p>
                )}
            </CardMargem>

            {carrinho.length !== 0 ? (
                <div>
                    <p>SUBTOTAL : R${sum.toFixed(2).replace(".", ",")}</p>
                    <p>Frete : R$ {restauranteEscolhido.shipping.toFixed(2).replace(".", ",")}</p>
                    <p>TOTAL : R${carrinhoTotal.toFixed(2).replace(".", ",")}</p>
                </div>
            ) : (
                <p></p>
            )}

                <FormadePagamento>Forma de Pagamento</FormadePagamento>

            <div onChange={PegarFormaPagamento}>
                <input type="radio" id="credito" name="fav_language" value="credito" />
                <label htmlFor="credito">Cartão de Crédito</label><br />

                <input type="radio" id="dinheiro" name="fav_language" value="dinheiro" />
                <label htmlFor="dinheiro">Dinheiro</label><br />

                <input type="radio" id="pix" name="fav_language" value="pix" />
                <label htmlFor="pix">Pix</label>
            </div>

            <button onClick={() => FazerPedido(carrinho, formaPagamento)}>Confirnar</button>


            <NavBar>
                <Icons onClick={() => goToFeed(navigate)} src={home} alt="home" />
                <Icons onClick={() => goToCarrinho(navigate)} src={cart} alt="cart" />
                <Icons onClick={() => goToPerfil(navigate)} src={avatar} alt="avatar" />
            </NavBar>



        </Container>
    )
}

export default Carrinho