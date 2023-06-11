import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { getPokemonLucha } from '../firebase/FBcategorias';
import './lucha.css'
import { IPokemon } from '../interfaces/IPokemon';
export const PageLucha = () => {
  const [categorias, setCategorias] = useState<IPokemon[]>([])
  useEffect(() => {
    getPokemonLucha()
      .then(res => {
        console.log(...res)
        setCategorias([...res])
      })
  }, [])
  return (
    <>

      <h1 id='NewCat'>POKEMONS TIPO LUCHA</h1>
            <div className='poki'>
          {
            categorias.slice(0, 100).map((categoria) => (
              <div className="p3">
                <img src={categoria.imagen} />
                <h2>{categoria.nombre}</h2>
                <p>{categoria.descripcion}</p>
              </div>
              
            ))
}
</div>
</>
)}