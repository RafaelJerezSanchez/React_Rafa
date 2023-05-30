import React from 'react'
import { ICategoria } from '../interfaces/ICategoria';
import { useState } from 'react';
import { useEffect } from 'react';
import { getCategoriaslucha } from '../firebase/FBcategorias';
import './lucha.css'
export const ProyectosPage = () => {
  const [categorias, setCategorias] = useState<ICategoria[]>([])
  useEffect(() => {
    getCategoriaslucha()
      .then(res => {
        console.log(...res)
        setCategorias([...res])
      })
  }, [])
  return (
    <>

      <h2 id='NewCat'>POKEMONS TIPO LUCHA</h2>
          {
            categorias.slice(0, 100).map((categoria) => (
              <>
              <div className='PokemonsLucha'>
              <div className='pl1' >{categoria.pokelu1}
              <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/448.png"/></div>
              <div className='pl2'>{categoria.pokelu2}
              <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/068.png"/></div>
              <div className='pl3'>{categoria.pokelu3}
              <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/802.png" /></div>
              <div className='pl4'>{categoria.pokelu4}
              <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/638.png"/></div>
              {/* <div className='5'>{categoria.quinto}
              <img src=""/></div> */}
              </div>
              </>
            ))
}
</>
)}