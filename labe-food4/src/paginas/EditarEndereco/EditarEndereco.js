import React from "react";
import { useForm } from "../../hooks/useForm";
import {BASE_URL} from "../../constantes/BASE_URL"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BotaoGeral, Inputs, InputsGeral} from "../../constantes/ScreenContainer";
import { goToPerfil, goReturn } from "../../routes/Coordenator";
import { Cabecalho, NomeApp, Container, Back } from "./Style";
import back from "../../assets/back.png"

const EditarEndereco = () =>{
    
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
            alert("Endereço Editado com Sucesso")
            
        })
        .catch((err) =>{
            alert("Dados invalidos")
            console.log("Erro ao Cadastrar", err.response)
        })


    }

    return (
       <Container>
        <Cabecalho>
        <Back onClick={() => goReturn(navigate)} src={back} alt="back" />
            <NomeApp>Endereço</NomeApp>
          </Cabecalho>
            <form onSubmit={CadastrarEndereco}>
            <div>
                <InputsGeral
                 placeholder="Logradouro"
                 value={form.street}
                 onChange={onChange}
                 name="street"
                 required
                />

                <InputsGeral
                placeholder="Numero"
                value={form.number}
                onChange={onChange}
                name="number"
                type="number"
                required
                />

                <InputsGeral
                 placeholder="Complemento"
                 value={form.complement}
                 onChange={onChange}
                 name="complement"
                />

                <InputsGeral
                placeholder="Bairro"
                value={form.neighbourhood}
                onChange={onChange}
                required
                name="neighbourhood"
                
                />

                <InputsGeral
                placeholder="Cidade"
                value={form.city}
                onChange={onChange}
                name="city"
                required
                />

                 <InputsGeral
                placeholder="Estado"
                value={form.state}
                onChange={onChange}
                name="state"
                required
                />

            </div>
            <BotaoGeral>Salvar</BotaoGeral>
            </form>
       </Container>
    )
}

export default EditarEndereco