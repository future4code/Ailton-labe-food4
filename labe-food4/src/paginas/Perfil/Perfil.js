import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { GlobalContext } from "../../componentes/global/GlobalContext";
import { Container, Endereco, Linha, Historico } from "./Style";
import { Cabecalho } from "./Style";
import { DadosPessoal } from "./Style";
import { PerfilLetras, TituloEndereco } from "./Style";
import { BoxEndereco } from "./Style";

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

                <BoxEndereco>
                    <TituloEndereco>Endereço cadastrado</TituloEndereco>
                    {perfil ?
                    <Endereco>{perfil.address}</Endereco> : <p>Carregando...</p>}
                </BoxEndereco>

            <Historico>Histórico de Pedidos</Historico>
            <Linha />

        </Container>

    )
}

export default Perfil