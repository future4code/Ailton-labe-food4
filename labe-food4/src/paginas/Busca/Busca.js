import React, { useEffect, useState } from "react";
import { Pesquisa, ContainerPesquisa, Container, Cabecalho, NomeApp } from "./Style";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { FeedCard } from "../../componentes/Cards/FeedCard";
import { GlobalContext } from "../../componentes/global/GlobalContext";

const Busca = () =>{
    const navigate = useNavigate()
    const  {states} = useContext(GlobalContext)
    const {restaurantes, restaurantesDetalhes} = states
    const [query, setQuery] = useState("")
  
    const filterRestaurantes = restaurantes && restaurantes.filter(restaurante =>{
      return restaurante.name.toLowerCase().includes(query.toLowerCase()) ? true : false 
    })

    console.log(filterRestaurantes)

    const mapRestaurantes = filterRestaurantes.length > 0 ? filterRestaurantes.map((restaurante) =>{
      return (
        <FeedCard key={restaurante.id} restaurante={restaurante}/>
      )
    }) : <p>Não encontramos :(</p>
   
    console.log(mapRestaurantes)

    const updateQuery = (evento) => {
      setQuery(evento.target.value)
    }

    return (
      <Container>
          <Cabecalho>
            <NomeApp>Rappi4</NomeApp>
          </Cabecalho>
          <ContainerPesquisa>
          <Pesquisa
            placeholder={"Restaurante"}
            value={query}
            onChange={updateQuery}
          />
        </ContainerPesquisa>
        {mapRestaurantes}
      </Container>
    );
}

export default Busca