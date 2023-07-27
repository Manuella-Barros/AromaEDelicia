import React from 'react';
import './Banner.css'

function Banner() {
    return (
        <article id='main_banner'>
            <picture id='imagem_banner'>
                <img src='./imagens/home/banner.jpg'/>
            </picture>

            <section id='texto_banner'>
                <h1>CAFÉS COM A CARA <br /> DO BRASIL</h1>
                <p>Direito das fazendas de Minas Gerais</p>
            </section>
        </article>
    );
}

export default Banner;