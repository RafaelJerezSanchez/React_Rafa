import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { getPokemonAgua } from '../firebase/FBcategorias';
import './agua.css'
import { IPokemon } from '../interfaces/IPokemon';
export const PageAgua = () => {
  const [categorias, setCategorias] = useState<IPokemon[]>([])
  useEffect(() => {
    getPokemonAgua()
      .then(res => {
        console.log(...res)
        setCategorias([...res])
      })
  }, [])
  return (
    <>

      <h1 id='NewCat'>POKEMONS TIPO AGUA</h1>
            <div className='poki'>
          {
            categorias.slice(0, 100).map((categoria) => (
              <div className="p2">
                <img src={categoria.imagen} />
                <h2>{categoria.nombre}</h2>
                <p>{categoria.descripcion}</p>
              </div>
              
            ))
}
</div>
</>
)}