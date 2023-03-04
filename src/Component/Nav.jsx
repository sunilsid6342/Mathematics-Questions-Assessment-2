import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark py-2'>
        <Link to="/" className='navbar-brand ml-5'>Mathematics Questions </Link>
    </nav>
  )
}

export default Nav
