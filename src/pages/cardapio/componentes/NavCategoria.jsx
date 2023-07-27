import React from 'react';
import { Link } from 'react-router-dom';

function NavCategoria() {
    return (
      <nav id="nav_categoria">
        <Link to={'cafes'}>Cafes</Link>
        <Link to={'donuts'}>Donuts</Link>
        <Link to={'cupcakes'}>Cupcakes</Link>
      </nav>
    );
}

export default NavCategoria;