import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { GlobalContext } from "../../componentes/global/GlobalContext";
import { FeedCard } from "../../componentes/Cards/FeedCard"
import { CardCategoria } from "../../componentes/Cards/CardCategoria"
import { Pesquisa, NomeApp, Icons, NavBar, Cards, ContainerPesquisa, Container, Cabecalho } from "./Style";
import { goToCarrinho, goToFeed, goToPerfil } from "../../routes/Coordenator";
import { useNavigate } from "react-router-dom";
import { Categorias } from "./Style";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import cart from "../../assets/shopping-cart.png"
import avatar from "../../assets/avatar.png"
import home from "../../assets/homepage-laranja.png"
import { useProtectedPage } from "../../hooks/useProtectedPage"
import { goToCadastroEndereco } from "../../routes/Coordenator";
import ActiveCard from "../../componentes/Cards/ActiveCard";

const Feed = () => {
  useProtectedPage()
  const navigate = useNavigate()
  const { states, requests } = useContext(GlobalContext)
  const { restaurantes, restaurantesDetalhes, active } = states
  const { PegarRestaurantes, pegarOrdensAtivas } = requests
  const [ query, setQuery ] = useState("")
  const [categoria, setCategoria] = useState("")

  const filterRestaurantes = restaurantes && restaurantes.filter(restaurante => {
    return restaurante.name.toLowerCase().includes(query.toLowerCase()) ? true : false
  })

  const categoriaRestaurantes = filterRestaurantes.length > 0 && filterRestaurantes.filter(restaurante => {
    return categoria !== "" ? restaurante.category === categoria : true
  })

  const mapRestaurantes = categoriaRestaurantes.length > 0 ? categoriaRestaurantes.map((restaurante) => {
    return (
      <FeedCard key={restaurante.id} restaurante={restaurante} />
    )
  }) : <p>Não encontramos :(</p>

  const updateQuery = (evento) => {
    setQuery(evento.target.value)
  }

   // Categoria do restaurante 

  //  const resCategoria = restaurantes.filter((restau, categoria) => {
  //   return restau.category === categoria
  // })

  // const selectedRes = categoriasFiltrados && categoriasFiltrados.map((choosing) => {
  //   return <CardCategoria key={choosing.id} choosing={choosing} />
  // })

  // Map do Carousel 
  const categorias = restaurantes?.map((restauranteCategoria) => {
    return restauranteCategoria.category;
  });

  const categoriasFiltrados = categorias?.filter((item, index) => {
    return categorias.indexOf(item) === index;
  });

  useEffect(() => {
    PegarRestaurantes(goToCadastroEndereco, navigate)
    pegarOrdensAtivas()
  }, [])

  return (
    <Container>
      <Cabecalho>
        <NomeApp>Rappi4</NomeApp>
      </Cabecalho>

      {/* {active !== null && <p>{active.restaurantName}</p>} */}

      <ContainerPesquisa>
        <Pesquisa
          placeholder={"Restaurante"}
          value={query}
          onChange={updateQuery}
        />
      </ContainerPesquisa>

      <Carousel showThumbs={false}>
      {/* {selectedRes} */}
        {categoriasFiltrados?.map((categoria) => (
          <Categorias key={categoria}
          onClick={() => setCategoria(categoria)}
          >
            {categoria}
          </Categorias>
        ))}
      </Carousel>

      <Cards>{restaurantes.length > 0 ? mapRestaurantes : <p>Carregando...</p>}</Cards>
      
      <NavBar>
        <Icons onClick={() => goToFeed(navigate)} src={home} alt="home" />
        <Icons onClick={() => goToCarrinho(navigate)} src={cart} alt="cart" />
        <Icons onClick={() => goToPerfil(navigate)} src={avatar} alt="avatar" />
      </NavBar>
      
      {active !== null && <ActiveCard />}

    </Container>
  )
}

export default Feed