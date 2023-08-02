import React from 'react';
import './Home.css'
import Introducao from './componentes/introducao/Introducao';
import Sobre from './componentes/sobre/Sobre';
import Restaurantes from './componentes/restaurantes/Restaurantes'
import Banner from '../../componentes/banner/Banner';

function Home() {
    return (
        <main id='main_home'>
            <Banner/>
            <Introducao/>
            <Sobre/>
            <Restaurantes/>
        </main>
    );
}

export default Home;