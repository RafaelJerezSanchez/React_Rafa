import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './login.css'
import { Link } from 'react-router-dom';

export const SesionPage = () => {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div className="logincaja">
        <TextField id="outlined-basic" label="Correo" variant="outlined" />
        <TextField id="outlined-basic" label="Contraseña" variant="outlined" />
        <Link to={'/addpoke'}>
        <Button variant="contained">Iniciar Sesión</Button>
        </Link>
      </div>
    </Box>
  );
}