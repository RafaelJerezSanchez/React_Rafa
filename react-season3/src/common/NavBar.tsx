import React from 'react'
import { routes } from './routes'
import { NavLink } from 'react-router-dom'
import './NavBar.css'

export const NavBar = () => {
  return (
    <>
      <h1 className='tittle'>PROYECTO HAZTE CON TODOS</h1>
      <nav className='navbar'>
        {
          routes.map(({ path, name }) => (
            <NavLink
              className="opcion"
              to={path}>
              {name}
            </NavLink>
          ))
        }
      </nav>
    </>
  )
}
// {
//   routes.map(({ path, name }) => (
//     <NavLink
//       className="opcion"
//       to={path}>
//       {name}
//     </NavLink>
//   ))
// }