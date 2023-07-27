import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

function NavBar() {
    return (
        <nav id='navbar'>
            <article>
                <Link to={'./'}>
                    <h2>Aroma & Delícia</h2>
                </Link>
            </article>
            
            <article id='links_nav'>
                <Link>Sobre</Link>
                <Link to={'/cardapio/cafes'}>Cardápio</Link>
                <Link>Portfólio</Link>
                <Link>Contato</Link>
            </article>
        </nav>
    );
}

export default NavBar;