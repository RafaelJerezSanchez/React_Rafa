import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { getPokemonFuego } from '../firebase/FBcategorias';
import './fuego.css'
import { IPokemon } from '../interfaces/IPokemon';
export const PageFuego = () => {
  const [categorias, setCategorias] = useState<IPokemon[]>([])
  useEffect(() => {
    getPokemonFuego()
      .then(res => {
        console.log(...res)
        setCategorias([...res])
      })
  }, [])
  return (
    <>

      <h1 id='NewCat'>POKEMONS TIPO FUEGO</h1>
            <div className='poki'>
          {
            categorias.slice(0, 100).map((categoria) => (
              <div className="p1">
                <img src={categoria.imagen} />
                <h2>{categoria.nombre}</h2>
                <p>{categoria.descripcion}</p>
              </div>
              
            ))
}
</div>
</>
)}