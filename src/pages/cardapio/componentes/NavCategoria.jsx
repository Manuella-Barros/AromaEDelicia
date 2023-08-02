import React from 'react';
import { NavLink } from 'react-router-dom';

function NavCategoria() {
    return (
        <nav id="nav_categoria">
            <NavLink to={"cafes"}>Cafes</NavLink>
            <NavLink to={"donuts"}>Donuts</NavLink>
            <NavLink to={"cupcakes"}>Cupcakes</NavLink>
        </nav>
    );
}

export default NavCategoria;