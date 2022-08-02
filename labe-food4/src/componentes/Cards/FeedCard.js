import React, { useState } from "react"



export const FeedCard = (props) => {
    const restaurante = props.restaurante
    

    return (
            <div>
                <img height="30em" width="30em" src={restaurante.logoUrl}/>
                <p>{restaurante.name} </p> 
                <p>{restaurante.deliveryTime}</p>
                <p>Frete R${restaurante.shipping},00</p>
            </div>
    )
}