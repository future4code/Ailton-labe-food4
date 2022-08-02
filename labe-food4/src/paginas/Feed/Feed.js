import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { GlobalContext } from "../../componentes/global/GlobalContext";
import {FeedCard} from "../../componentes/Cards/FeedCard"


const Feed = () =>{
    const  {states} = useContext(GlobalContext)
    const {restaurantes} = states
  
    const mapRestaurantes = restaurantes.map((restaurante) =>{
      return (
        <FeedCard key={restaurante.id} restaurante={restaurante}/>
      )
    })

    return (
       <div>
       <div>Header</div> 
       <input
       placeholder="Restaurante"
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