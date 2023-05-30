import React from 'react'
import { ICategoria } from '../interfaces/ICategoria'
import { getCategorias } from '../firebase/FBcategorias'
import { useState } from 'react'
import { useEffect } from 'react'
export const CategoriasPage = () => {
  const [categorias, setCategorias] = useState<ICategoria[]>([])
  // getCategorias()
  //   .then(res => {
  //     console.log(...res)
  //     setCategorias([...res])
  //   });
  useEffect(() => {
    getCategorias()
      .then(res => {
        console.log(...res)
        setCategorias([...res])
      })
  }, [])

  return (
    <>
    <h2 id='NewCat'>Listado de Categorias</h2>
          {
            categorias.slice(0, 100).map((categoria) => (
              <>
              <li key={categoria.name}>{categoria.name}</li>
              <li key={categoria.name}>{categoria.valor}</li>
              </>
            ))
          }
        </>
  )
}