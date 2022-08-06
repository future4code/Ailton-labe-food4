import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../global/GlobalContext'

const ActiveCard = () => {
    const { requests, states } = useContext(GlobalContext)
    const { PegarOrdensAtivas } = requests
    const { active, setActive } = states 

  return (
    <div>
        {active !== null && active.map((ordem) => {
            <div>{ordem.restaurantName}</div>
        })}
    </div>
  )
}

export default ActiveCard