import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { GlobalContext } from "../../componentes/global/GlobalContext";
import { useContext } from "react";
import Modal from "react-modal"

const Countainer = styled.div`
display:flex;
border: 1px solid black;
border-radius: 5px;
margin-bottom: 1rem;
margin-top: 1rem;
border-radius: 5px;
border-color: #b8b8b8;
width: 80%;
height: 8rem;
`
const ImagemCard = styled.img`
    width: 10rem;
    height: 100%;
`

const Nomecomida = styled.div`
color: #e86e5a;
margin-top: 1rem;
font-weight: bold;
`

const NomeDescricao = styled.span`
color: #D1D1D6;
margin-top: 0.3rem;
margin-bottom: 0.3rem;
`

const NomePreco = styled.span`
color: black;
margin-bottom: 1rem;
`

const NomeBotao = styled.button`
border: 1px solid black;
background-color: white;
border-radius: 3px;
`

const FooterCard = styled.div`
display: flex;
justify-content: space-between;

`

const Rodape = styled.div`
color: gray;
display: flex;
margin-left: 1rem;
margin-bottom: 0.5rem;
justify-content: space-between;
flex-direction:column;
`
const ModalStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

const SelectModal = styled.select`
width: 100%;
height: 3rem;
border-color: #E5E5EA;
`

const BotaoModal = styled.button`
border: none;
background-color: white;
color: #007AFF;
margin-top: 1rem;
`

export const DetalhesCard = (props) => {
    const comida = props.comida
    const { requests, states, setters } = useContext(GlobalContext)
    const { adicionaCarrinho, adicionaCarrinhoAux } = requests
    const { carrinho, amount, carrinhoProdutos } = states
    const { setAmount, setCarrinhoProdutos } = setters
    const [modalIsOpen, setIsOpen] = useState(false)


    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);

        // console.log("Função closemodal passando pro adicionaCarrinho: " , comida)
        amount > 0 ? adicionaCarrinho(comida, amount) : alert("Selecione uma quantidade.")

        //Fiz uma função auxiliar para não interferir com a renderização.
        // amount > 0 ? adicionaCarrinhoAux(comida , amount) : alert("Selecione uma quantidade.")  

        // Limpa o input
        setAmount(0)
    }
    const seleciona = (event) => {
        setAmount(event.target.value)
    }

    console.log(carrinho)

    return (
        <Countainer>

            <div>
                <ImagemCard src={comida.photoUrl} />
            </div>

            <Rodape>
                <Nomecomida>{comida.name}</Nomecomida>

                <NomeDescricao>{comida.description}</NomeDescricao>


                <FooterCard>
                <NomePreco>R${comida.price.toFixed(2).replace(".", ",")}</NomePreco>

                    <NomeBotao onClick={openModal}>adicionar</NomeBotao>

                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        contentLabel="Example Modal"
                        style={ModalStyles}
                        aria={{
                            labelledby: "heading",
                            describedby: "full_description",
                        }}
                        ariaHideApp={false}
                    >
                        <h3 id="heading">Selecione a Quantidade Desejada</h3>
                        <div id="full_description">

                            <SelectModal value={amount}
                                onChange={seleciona}
                            >
                                <option value={0} disabled style={{ display: 0 }}></option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                                <option value={6}>6</option>
                                <option value={7}>7</option>
                                <option value={8}>8</option>
                                <option value={9}>9</option>
                                <option value={10}>10</option>
                            </SelectModal>

                            <BotaoModal onClick={closeModal} >ADICIONAR AO CARRINHO</BotaoModal>
                        </div>
                    </Modal>
                </FooterCard>
            </Rodape>
            
        </Countainer>
    );
};