import React, { useState } from 'react'
import { useEffect } from 'react'

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
        {
          pokemons.map(({ name, url }) => (
            <li>{name}</li>
          ))
        }
      </ul>
    </>
  )
}
