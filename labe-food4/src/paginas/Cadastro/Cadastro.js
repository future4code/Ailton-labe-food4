import React from "react";
import { useForm } from "../../hooks/useForm";
import {BASE_URL} from "../../constantes/BASE_URL"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { goToFeed } from "../../routes/Coordenator";


const Cadastro = () =>{
    const navigate = useNavigate()
    const { form, onChange } = useForm({ name: "", email: "", cpf: "", password: "" })

    const Cadastrar = (event) => {
        event.preventDefault()
        console.log("deu boa")
        const url = `${BASE_URL}/signup`
        axios.post(url, form)
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
            <div>imagem</div>
            <h2>Cadastrar</h2>
            <form onSubmit={Cadastrar}>
            <div>
                <input
                 placeholder="Digite o seu Nome"
                 name="name"
                 value={form.name}
                 onChange={onChange}
                 title="Name"
                 required
                />
                <input
                placeholder="Digite o seu Email"
                name="email"
                value={form.email}
                onChange={onChange}
                title="email"
                required
                />
                <input
                 placeholder="Digite o seu CPF"
                 name="cpf"
                 type="number"
                 value={form.cpf}
                 onChange={onChange}
                 pattern={"(\d{3})(\d{3})(\d{3})(\d{2})"}
                 title="CPF invalido"
                 required
                />
                <input
                placeholder="Digite sua Senha"
                name="password"
                value={form.password}
                onChange={onChange}
                pattern={"^.{8,30}$"}
                title="Minimo 8, máximo 30"
                required
                />
                <input
                placeholder="Confirmar Senha"
                />
            </div>
            <button>Criar</button>
            </form>
       </div>
    )
}

export default Cadastro