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
    const { PegarPerfil, PegarOrdensAtivas } = requests
    const { perfil, restauranteEscolhido, carrinho, carrinhoProdutos, amount, somaCarrinho } = states
    const {setCarrinho, setAmount, setCarrinhoProdutos} = setters
    const [formaPagamento, setFormaPagamento] = useState("")
    const [auxiliar , setAuxiliar] = useState([])

    useEffect(() => {
        PegarPerfil()
    }, [])


    const mapCarrinho = carrinho?.map((produto) => {
        return <CardCarrinho key={produto.id} comida={produto} />
    })
    console.log("Carrinho", carrinho)


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
    
    const FazerPedido = (carrinhoProdutos, Pagamento) => {
        
        // console.log("Dentro da requisição FazerPedido" , carrinhoProdutos)
        // const mapCarrinhoAuxiliar = carrinhoProdutos.map((index) => {
            
        //     return index.id
        // }) 

        const produtosMapeados = carrinhoProdutos.map((produto) => {
            return {
                id: `${produto.id}`,
                quantity: produto.amount,
            }
        })
        // console.log(produtosMapeados)
        
        const url = `${BASE_URL}/restaurants/${restauranteEscolhido.id}/order`
        const token = localStorage.getItem("token")
        // console.log("mapCarrinhoAuxiliar:" , mapCarrinhoAuxiliar[0])
        
        const body = {
            products: produtosMapeados,
            paymentMethod: formaPagamento,

        }
        const header = {
            headers: {
                auth: token
            },
        }
        
        axios.post(url, body , header)
        .then((resp) =>{
            alert("Sucesso")
            setFormaPagamento("")
            setCarrinho([])
            setCarrinhoProdutos([])
            setAmount(0)
            console.log(resp)
        })
        .catch(() =>{
            alert("Deu erro, você já tem um pedido em andamento")
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
                <input type="radio" id="credito" name="fav_language" value="creditcard" />
                <label htmlFor="credito">Cartão de Crédito</label><br />

                <input type="radio" id="dinheiro" name="fav_language" value="money" />
                <label htmlFor="dinheiro">Dinheiro</label><br />
            </div>
            {/* Teste para o estado auxiliar */}
            <button onClick={() => FazerPedido(carrinho, formaPagamento)}>Confirmar</button>


            <NavBar>
                <Icons onClick={() => goToFeed(navigate)} src={home} alt="home" />
                <Icons onClick={() => goToCarrinho(navigate)} src={cart} alt="cart" />
                <Icons onClick={() => goToPerfil(navigate)} src={avatar} alt="avatar" />
            </NavBar>



        </Container>
    )
}

export default Carrinho