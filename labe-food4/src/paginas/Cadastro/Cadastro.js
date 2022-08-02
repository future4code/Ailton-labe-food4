import React from "react";
import { useForm } from "../../hooks/useForm";
import {BASE_URL} from "../../constantes/BASE_URL"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { LogoRappi, Titulo, InputEstilo, Container, BotaoEstilo, TextoBotao, AreaBotao } from "./Style";
import logo from "../../assets/logo-future-eats-invert.png"
import { goToCadastroEndereco } from "../../routes/Coordenator";

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
            goToCadastroEndereco(navigate)
        })
        .catch((err) =>{
            alert("Dados invalidos")
            console.log("Erro ao Cadastrar", err.response)
        })


    }

    return (
       <Container>
        <div>Header</div>
            <LogoRappi src={logo} alt={"logo"} />
            <Titulo>Cadastrar</Titulo>
            <form onSubmit={Cadastrar}>
            <div>
                <InputEstilo
                 placeholder="Digite o seu Nome"
                 name="name"
                 value={form.name}
                 onChange={onChange}
                 title="Name"
                 required
                />
                <InputEstilo
                placeholder="Digite o seu Email"
                name="email"
                value={form.email}
                onChange={onChange}
                title="email"
                required
                />

                <InputEstilo
                 placeholder="Digite o seu CPF"
                 name="cpf"
                 value={form.cpf}
                 onChange={onChange}
                 pattern={"[0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[\-]?[0-9]{2}"}
                 title="CPF invalido"
                 required
                />

                <InputEstilo
                placeholder="Digite sua Senha"
                name="password"
                value={form.password}
                onChange={onChange}
                pattern={"^.{8,30}$"}
                title="Minimo 8, máximo 30"
                required
                />
                <InputEstilo
                placeholder="Confirmar Senha"
                />
            </div>
            <AreaBotao>
            <BotaoEstilo><TextoBotao>Criar</TextoBotao></BotaoEstilo>
            </AreaBotao>
            </form>
       </Container>
    )
}

export default Cadastro