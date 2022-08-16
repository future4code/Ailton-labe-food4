import React, { useEffect, useState } from "react";
import { DivInput, Input, Cabecalho, NomeApp, Container, Back, BotaoEstilo, TextoBotao, AreaBotao } from "./Style";
import { useForm } from "../../hooks/useForm";
import { BASE_URL } from "../../constantes/BASE_URL"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import back from "../../assets/back.png"
import { goReturn } from "../../routes/Coordenator";
import { InputsGeral } from "../../constantes/ScreenContainer";

const EditarPerfil = () => {

    const navigate = useNavigate()
    const { form, onChange } = useForm({ name: "", email: "", cpf: "" })

    const EditarPerfil = (event) => {
        event.preventDefault()
        console.log("deu boa")
        const url = `${BASE_URL}/profile`
        const token = localStorage.getItem("token")
        const header = {
            headers: {
                auth: token
            },
        }
        axios.put(url, form, header)
            .then((resp) => {
                console.log(resp)

            })
            .catch((err) => {
                alert("Dados invalidos")
                console.log("Erro ao Cadastrar", err.response)
            })
    }


    return (
        <Container>

            <Cabecalho>
            <Back onClick={() => goReturn(navigate)} src={back} alt="back" />
            <NomeApp>Editar</NomeApp>
            <div></div>
          </Cabecalho>

            <form onSubmit={EditarPerfil}>
                <DivInput>
                    <Input
                        placeholder="Digite o seu Nome"
                        name="name"
                        value={form.name}
                        onChange={onChange}
                        title="Name"
                        required
                    />
                    <Input
                        placeholder="Digite o seu Email"
                        name="email"
                        value={form.email}
                        onChange={onChange}
                        title="email"
                        required
                    />

                    <Input
                        placeholder="Digite o seu CPF"
                        name="cpf"
                        value={form.cpf}
                        onChange={onChange}
                        pattern={"[0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[\-]?[0-9]{2}"}
                        title="CPF invalido"
                        required
                    />
                </DivInput>

                <AreaBotao>
                    <BotaoEstilo><TextoBotao>Salvar</TextoBotao></BotaoEstilo>
                </AreaBotao>
            </form>
        </Container>
    )
}

export default EditarPerfil