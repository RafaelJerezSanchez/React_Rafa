import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { TextField } from '@mui/material';
import { IPokemon } from '../interfaces/IPokemon';
import { getPokemon, newPoke } from '../firebase/FBcategorias';
import { useForm } from 'react-hook-form';
import './Productosestilos.css'

export const Productos = () => {
  const { register, handleSubmit } = useForm<IPokemon>();
  const onAddCategoria = async (dataCategoria: IPokemon) => {
    console.log(dataCategoria)
    await newPoke(dataCategoria)
    window.location.reload();
  }
  const [categorias, setCategorias] = useState<IPokemon[]>([])
  useEffect(() => {
    getPokemon()
      .then(res => {
        console.log(...res)
        setCategorias([...res])
      })
  }, [])
  return (
    <>
    <Grid container sx={{ display: 'flex', justifyContent: 'space-around' }}>
        <Grid item xs={5} sx={{ backgroundColor: 'aqua', margin: '10px', padding: '12px', height: 'max-content', borderRadius: '20px' }}>
          {
            categorias.slice(0, 100).map((categoria) => (
              <>
              <h3 key={categoria.nombre}>{categoria.nombre}</h3>
              <h1>{categoria.descripcion}</h1>
              <h2>{categoria.tipo}</h2>
              <img src={categoria.imagen} alt="" />
              </>
            ))
          }
        </Grid>

        <Grid item xs={5} sx={{ backgroundColor: 'aqua', margin: '10px', padding: '12px', height: 'max-content', borderRadius: '20px' }}>
          <h2 id='NewCat'>Añadir nuevos datos</h2>
          <form onSubmit={handleSubmit(onAddCategoria)} noValidate >
            <TextField
              {...register('nombre')}
              // id='nombre'
              label='Nombre'
              type='string'
              sx={{ width: '60%' }}
            >
            </TextField>
            
            <TextField
              {...register('tipo')}
              // id='tipo'
              label='Tipo'
              type='string'
              sx={{ width: '60%' }}
            >
            </TextField>

            <TextField
              {...register('imagen')}
              // id='imagen'
              label='Imagen'
              type='string'
              sx={{ width: '60%' }}
            >
            </TextField>

            <TextField
              {...register('descripcion')}
              // id='descripcion'
              label='descripcion'
              type='string'
              sx={{ width: '60%' }}
            >
            </TextField>


            <Button type='submit' variant="contained" sx={{ marginTop: '10px' }}>Añadir</Button>
          </form>
        </Grid>
      </Grid>

    </>
  );
    
}