import React from 'react'
import { ICategoria } from '../interfaces/ICategoria';
import { useState } from 'react';
import { useEffect } from 'react';
import { getCategorias } from '../firebase/FBcategorias';
import './fuego.css'
export const ContactoPage = () => {
  const [categorias, setCategorias] = useState<ICategoria[]>([])
  useEffect(() => {
    getCategorias()
      .then(res => {
        console.log(...res)
        setCategorias([...res])
      })
  }, [])
  return (
    <>

      <h2 id='NewCat'>POKEMONS TIPO FUEGO</h2>
          {
            categorias.slice(0, 100).map((categoria) => (
              <>
              <div className='PokemonsFuego'>
              <div className='p1' >{categoria.poke1}
              <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png"/></div>
              <div className='p2'>{categoria.poke2}
              <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/392.png"/></div>
              <div className='p3'>{categoria.poke3}
              <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/494.png" /></div>
              <div className='p4'>{categoria.poke4}
              <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/643.png"/></div>
              {/* <div className='5'>{categoria.quinto}
              <img src=""/></div> */}
              </div>
              </>
            ))
}
</>
)}