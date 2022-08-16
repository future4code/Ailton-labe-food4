import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { BASE_URL } from "../../constantes/BASE_URL"
import { Container, DivLogo, SpanCadastro, Input, BotaoCadastro, DivInput, Titulo, DivCadastro, LogoRappi, BotaoGeral, DivBotao } from "../Login/Style";
import logo from "../../assets/logo-future-eats-invert.png"
import axios from "axios";
import { goToFeed } from "../../routes/Coordenator";
import { goToCadastro } from "../../routes/Coordenator";
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage"

const Login = () => {
    useUnprotectedPage()
    const navigate = useNavigate()
    const { form, onChange, cleanFields } = useForm({ email: "", password: "" })

    const Login = (event) => {
        event.preventDefault()
        const url = `${BASE_URL}/login`
        axios.post(url, form)
            .then((resp) => {
                localStorage.setItem("token", resp.data.token)
                goToFeed(navigate)
            })
            .catch((err) => {
                alert("E-mail ou senha invalida")
                console.log("Deu errado", err.response)
            })
    }

    const limparlocalStorage = () => {
        localStorage.clear()
        alert("Logout realizado")
    }

    return (
      <Container>
        
        <DivLogo>
        <LogoRappi src={logo} alt={"logo"} />
        </DivLogo>

        <Titulo>Entrar</Titulo>

        <form onSubmit={Login}>
          <DivInput>
            <Input
              name="email"
              className="InputDetalhe1Login"
              placeholder="Email"
              value={form.email}
              onChange={onChange}
              pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$"}
              title="Utilize apenas caracteres minúsculos, números, não esqueça da @."
              required
            />
            <Input
              name="password"
              type={"password"}
              className="InputDetalhe2Login"
              placeholder="Senha"
              value={form.password}
              onChange={onChange}
              pattern={"^.{8,30}$"}
              title="Minimo 8, máximo 30"
              required
            />
          </DivInput>

          <DivBotao>
          <BotaoGeral>Entrar</BotaoGeral>
          </DivBotao>

        </form>

        <DivCadastro>
          <p>Não possui Cadastro?</p> 
          <SpanCadastro onClick={() => goToCadastro(navigate)}>Clique aqui.</SpanCadastro>
        </DivCadastro>

        {/* <button onClick={limparlocalStorage}>Logout</button> */}
      </Container>
    );
}

export default Login