import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { GlobalContext } from "../../componentes/global/GlobalContext";
import {FeedCard} from "../../componentes/Cards/FeedCard"
import { Cards } from "./Style";
import { Pesquisa } from "./Style";
import { ContainerPesquisa } from "./Style";
import { Container } from "./Style";
import { Cabecalho } from "./Style";
import { goToPerfil } from "../../routes/Coordenator";
import { useNavigate } from "react-router-dom";
import { Categorias } from "./Style";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Feed = () =>{
    const navigate = useNavigate()
    const  {states} = useContext(GlobalContext)
    const {restaurantes} = states
    const [query, setQuery] = useState("")
  
    const filterRestaurantes = restaurantes && restaurantes.filter(restaurante =>{
      return restaurante.name.toLowerCase().includes(query.toLowerCase()) ? true : false
    })

    const mapRestaurantes = filterRestaurantes.length > 0 ? filterRestaurantes.map((restaurante) =>{
      return (
        <FeedCard key={restaurante.id} restaurante={restaurante}/>
      )
    }) : <p>Não encontramos :(</p>
   
    const updateQuery = (evento) => {
      setQuery(evento.target.value)
    }

    // Map do Carousel 
    const categorias = restaurantes?.map((restauranteCategoria) => {
      return restauranteCategoria.category;
  });
  const categoriasFiltrados = categorias?.filter((item, index) => {
      return categorias.indexOf(item) === index;
  });

    return (
       <Container>
       <Cabecalho>Rappi4</Cabecalho> 

       <ContainerPesquisa>

       <Pesquisa
       placeholder="Restaurante"
       value={query}
       onChange={updateQuery} 
       />

      </ContainerPesquisa>

      <Carousel showThumbs={false}>
            {categoriasFiltrados?.map((categoria) => (
                <Categorias key={categoria}
                            
                >
                  {categoria}
                </Categorias>
          ))}
        </Carousel>

       <Cards>{restaurantes.length > 0 ? mapRestaurantes : <p>Carregando...</p>}</Cards>
       <div>
            <div>Home</div>
            <div>Carrinho</div>
            <div onClick={() => goToPerfil(navigate)}>Perfil</div>
       </div>
       
        </Container>
    )
}

export default Feed