import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { GlobalContext } from "../../componentes/global/GlobalContext";
import {FeedCard} from "../../componentes/Cards/FeedCard"


const Feed = () =>{
    const  {states} = useContext(GlobalContext)
    const {restaurantes} = states
    const [query, setQuery] = useState("")
  
    const mapRestaurantes = restaurantes
    . filter(restaurante =>{
      return restaurante.name.toLowerCase().includes(query.toLowerCase())
    })
        .map((restaurante) =>{
          return (
            <FeedCard key={restaurante.id} restaurante={restaurante}/>
            )
          })
          console.log(mapRestaurantes)
   

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
       <div>{mapRestaurantes}</div>
       <div>
            <div>Home</div>
            <div>Carrinho</div>
            <div>Perfil</div>
       </div>
       
        </div>
    )
}

export default Feed