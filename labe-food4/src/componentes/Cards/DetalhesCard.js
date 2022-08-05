import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { ImagemCard } from "../../constantes/ScreenContainer"
import { GlobalContext } from "../../componentes/global/GlobalContext";
import { useContext } from "react";
import Modal from "react-modal"

const Countainer = styled.div`
display:flex;
border: 1px solid black;
border-radius: 5px;
margin-bottom: 1rem;
margin-top: 1rem;
flex-direction: column;
border-radius: 5px;
border-color: #b8b8b8;
width: 80%;

`

const Nomecomida = styled.div`
color: #e86e5a;
margin-top: 0.5rem;
margin-left: 1rem;
`

const Rodape = styled.div`
color: gray;
display: flex;
margin-left: 1rem;
margin-right: 1rem;
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
width: 80%;
height: 2rem;
`

export const DetalhesCard = (props) => {
    const comida = props.comida
    const { requests, states, setters } = useContext(GlobalContext)
    const { adicionaCarrinho, adicionaCarrinhoAux } = requests
    const { carrinho, amount, carrinhoProdutos } = states
    const {setAmount, setCarrinhoProdutos} = setters
    const [modalIsOpen, setIsOpen] = useState(false)
  

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
        
        // console.log("Função closemodal passando pro adicionaCarrinho: " , comida)
        amount > 0 ? adicionaCarrinho(comida , amount) : alert("Selecione uma quantidade.")

        //Fiz uma função auxiliar para não interferir com a renderização.
        // amount > 0 ? adicionaCarrinhoAux(comida , amount) : alert("Selecione uma quantidade.")  
        
        // Limpa o input
        setAmount(0)
    }


    const seleciona = (event) =>{
        setAmount(event.target.value)
    }

    console.log(carrinho)
    

    return (
        <Countainer>
            <div>
                <ImagemCard src={comida.photoUrl} />
            </div>
            <div>
                <Nomecomida>{comida.name}</Nomecomida>
            </div>
            <Rodape>
                <p>{comida.description}</p>
                <span>R${comida.price.toFixed(2).replace(".", ",")}</span>

                <div>
                    <button onClick={openModal}>Adicionar</button>
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
                                <option value={0} disabled style={{ display: 'none' }}></option>
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

                            <button
                                onClick={closeModal}
                            >adicionar</button>
                        </div>
                    </Modal>
                </div>
            </Rodape>
        </Countainer>
    );
};