import React from 'react'
import { ICategoria } from '../interfaces/ICategoria';
import { useState } from 'react';
import { useEffect } from 'react';
import { getCategoriasagua } from '../firebase/FBcategorias';
import './agua.css'
export const FormacionPage = () => {
  const [categorias, setCategorias] = useState<ICategoria[]>([])
  useEffect(() => {
    getCategoriasagua()
      .then(res => {
        console.log(...res)
        setCategorias([...res])
      })
  }, [])
  return (
    <>

      <h2 id='NewCat'>POKEMONS TIPO AGUA</h2>
          {
            categorias.slice(0, 100).map((categoria) => (
              <>
              <div className='PokemonsAgua'>
              <div className='pa1' >{categoria.pokeag1}
              <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/658.png"/></div>
              <div className='pa2'>{categoria.pokeag2}
              <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/503.png"/></div>
              <div className='pa3'>{categoria.pokeag3}
              <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/484.png" /></div>
              <div className='pa4'>{categoria.pokeag4}
              <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/647.png"/></div>
              {/* <div className='5'>{categoria.quinto}
              <img src=""/></div> */}
              </div>
              </>
            ))
}
</>
)}