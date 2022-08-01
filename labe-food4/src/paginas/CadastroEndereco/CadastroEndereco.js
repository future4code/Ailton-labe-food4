import React from "react";
import { useForm } from "../../hooks/useForm";
import {BASE_URL} from "../../constantes/BASE_URL"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { goToFeed } from "../../routes/Coordenator";


const CadastroEndereco = () =>{
    const navigate = useNavigate()
    const { form, onChange } = useForm({ street: "", number: "", neighbourhood: "", city: "", state: "", complement: "" })

    const CadastrarEndereco = (event) => {
        event.preventDefault()
        console.log("deu boa")
        const url = `${BASE_URL}/address`
        axios.put(url, form)
        .then((resp) =>{
            localStorage.setItem("token", resp.data.token)
            alert("Usuario Cadastrado com Sucesso")
            goToFeed(navigate)
        })
        .catch((err) =>{
            alert("Dados invalidos")
            console.log("Erro ao Cadastrar", err.response)
        })


    }

    return (
       <div>
        <div>Header</div>
            <h2>Cadastrar Endereço</h2>
            <form onSubmit={CadastrarEndereco}>
            <div>
                <input
                 placeholder="Logradouro"
                 value={form.street}
                 onChange={onChange}
                 name="street"
                 required
                />
                <input
                placeholder="Numero"
                value={form.number}
                onChange={onChange}
                name="number"
                required
                />

                <input
                 placeholder="Complemento"
                 value={form.complement}
                 onChange={onChange}
                 name="complement"
                />

                <input
                placeholder="Bairro"
                value={form.neighbourhood}
                onChange={onChange}
                required
                name="neighbourhood"
                />
                <input
                placeholder="Cidade"
                value={form.city}
                onChange={onChange}
                name="city"
                />
                 <input
                placeholder="Estado"
                value={form.state}
                onChange={onChange}
                name="state"
                />
            </div>
            <button>Criar</button>
            </form>
       </div>
    )
}

export default CadastroEndereco