import React from "react";
import { useForm } from "../../hooks/useForm";
import {BASE_URL} from "../../constantes/BASE_URL"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { goToFeed, goReturn } from "../../routes/Coordenator";
import { BotaoGeral } from "../../constantes/ScreenContainer";
import { Container, Cabecalho, Titulo, BotaoEstilo, TextoBotao, AreaBotao,  Input, Back, DivInput } from "./Style";
import back from "../../assets/back.png"

const CadastroEndereco = () =>{
    const navigate = useNavigate()
    const { form, onChange } = useForm({ street: "", number: "", neighbourhood: "", city: "", state: "", complement: "" })

    const CadastrarEndereco = (event) => {
        event.preventDefault()
        console.log("deu boa")
        const url = `${BASE_URL}/address`
        const token = localStorage.getItem("token")
        const header = {
            headers: {
                auth: token
            },
        }
        axios.put(url, form, header)
        .then((resp) =>{
            localStorage.setItem("token", resp.data.token)
            alert("Endereço Cadastrado com Sucesso")
            goToFeed(navigate)
        })
        .catch((err) =>{
            alert("Dados invalidos")
            console.log("Erro ao Cadastrar", err.response)
        })


    }

    return (
       <Container>
         <Cabecalho>
            <Back onClick={() => goReturn(navigate)} src={back} />
          </Cabecalho>

          <Titulo>Meu endereço</Titulo>

            <form onSubmit={CadastrarEndereco}>
            <DivInput>
                <Input
                 placeholder="Logradouro"
                 value={form.street}
                 onChange={onChange}
                 name="street"
                 required
                />

                <Input
                placeholder="Numero"
                value={form.number}
                onChange={onChange}
                name="number"
                type="number"
                required
                />

                <Input
                 placeholder="Complemento"
                 value={form.complement}
                 onChange={onChange}
                 name="complement"
                />

                <Input
                placeholder="Bairro"
                value={form.neighbourhood}
                onChange={onChange}
                required
                name="neighbourhood"
                
                />

                <Input
                placeholder="Cidade"
                value={form.city}
                onChange={onChange}
                name="city"
                required
                />

                 <Input
                placeholder="Estado"
                value={form.state}
                onChange={onChange}
                name="state"
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

export default CadastroEndereco