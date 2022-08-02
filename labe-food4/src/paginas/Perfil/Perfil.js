import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { GlobalContext } from "../../componentes/global/GlobalContext";
import { Container } from "./Style";
import { Cabecalho } from "./Style";
import { DadosPessoal } from "./Style";
import { PerfilLetras } from "./Style";

const Perfil = () => {

    const { requests, states } = useContext(GlobalContext)
    const { PegarPerfil, PegarHistoricoPedidos } = requests
    const { perfil, historicoPedidos } = states

    useEffect(() => {
        PegarPerfil()
        PegarHistoricoPedidos()
    }, [])

    return (
        <Container>
            <Cabecalho>Meu Perfil</Cabecalho>
            {perfil ?
                <DadosPessoal>
                    <PerfilLetras>{perfil.name}</PerfilLetras>
                    <PerfilLetras>{perfil.email}</PerfilLetras>
                    <PerfilLetras>{perfil.cpf}</PerfilLetras>
                </DadosPessoal> : <p>Carregando...</p>}

            <div>
                <span>Endereço cadastrado</span>
                {perfil ?
                    <div>{perfil.address}</div> : <p>Carregando...</p>}
            </div>
            <div>Historico de Pedidos</div>

        </Container>

    )
}

export default Perfil