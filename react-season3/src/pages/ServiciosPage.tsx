import React, { useState } from 'react'
import { useEffect } from 'react'
import './ServiciosEstilos.css'
import { ClassNames } from '@emotion/react'

export const ServiciosPage = () => {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=448')
      .then(res => res.json())
      .then(res => res.results)
      .then(res => setPokemons(res))
  }, [])

  return (
    <>
      <h1 className='tittle'>POKEDEX</h1>
      <ul>
        <div className="menupoke">

          {
            pokemons.map(({ name, url}, index ) => (
              <div className='objeto'>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`} className='pokefoto' alt="" />
                <p>{name} - {index + 1}</p>
              </div>
            ))
          }
        </div>
      </ul>
    </>
  )

}