import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { GlobalContext } from "../../componentes/global/GlobalContext";
import {FeedCard} from "../../componentes/Cards/FeedCard"


const Feed = () =>{
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

    return (
       <div>
       <div>Header</div> 

       <input
       placeholder="Restaurante"
       value={query}
       onChange={updateQuery} 
       />

       <div>Filtro de Comida</div>
       <div>{restaurantes.length > 0 ? mapRestaurantes : <p>Carregando...</p>}</div>
       <div>
            <div>Home</div>
            <div>Carrinho</div>
            <div>Perfil</div>
       </div>
       
        </div>
    )
}

export default Feed