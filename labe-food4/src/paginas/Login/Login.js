import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { BASE_URL } from "../../constantes/BASE_URL"
import axios from "axios";
import { goToFeed } from "../../routes/Coordenator";
import { goToCadastro } from "../../routes/Coordenator";

const Login = () => {
    
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
        <div>
            <div>imagem</div>
            <h1>Faça seu Login</h1>
            <form onSubmit={Login}>
            <div>
                <input
                    name="email"
                    className="InputDetalhe1Login"
                    placeholder="Email"
                    value={form.email}
                    onChange={onChange}
                    pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"}
                    title="Utilize apenas caracteres minúsculos, números, não esqueça da @."
                    required
                />
                <input
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
            </div>
            <button>Login</button>
            </form>
            <div>
                <span>Não possui Cadastro?</span>
                <button onClick={() => goToCadastro (navigate)}>Cliqui aqui</button>
            </div>

            <button onClick={limparlocalStorage}>Logout</button>

        </div>
    )
}

export default Login