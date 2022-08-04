import React from "react";
import { useForm } from "../../hooks/useForm";
import {BASE_URL} from "../../constantes/BASE_URL"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { LogoRappi, Titulo, InputEstilo, Container, BotaoEstilo, TextoBotao, AreaBotao, Cabecalho, NomeApp, Back } from "./Style";
import logo from "../../assets/logo-future-eats-invert.png"
import { goToCadastroEndereco, goReturn } from "../../routes/Coordenator";
import back from "../../assets/back.png"

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

  

    let senha = document.getElementById('senha');
    let senhaC = document.getElementById('senhaC');

    const validarSenha = () => {
    if (senha.value != senhaC.value) {
    senhaC.setCustomValidity("Senhas diferentes!");
    senhaC.reportValidity();
    return false;
  } else {
    senhaC.setCustomValidity("");
    return true;
  }
}

    return (
       <Container>
        <Cabecalho>
            <Back onClick={() => goReturn(navigate)} src={back} alt="back" />
        </Cabecalho>
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
                type="password"
                id="senha" 
                required
                />
                <InputEstilo
                placeholder="Confirmar Senha"
                name="passwordC"
                onChange={onChange}
                pattern={"^.{8,30}$"}
                title="Minimo 8, máximo 30"
                type="password"
                id="senhaC" 
                required
                />
            </div>
            <AreaBotao>
            <BotaoEstilo onClick={validarSenha}><TextoBotao>Criar</TextoBotao></BotaoEstilo>
            </AreaBotao>
            </form>
       </Container>
    )
}

export default Cadastro