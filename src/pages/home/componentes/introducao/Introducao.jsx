import React from 'react';

function Introducao() {
    return (
        <article id='main_introducao'>
            <h2>Uma mistura de...</h2>
            
            <picture>
                <img src="./imagens/home/cafe-1.jpg" alt="" />
                <figcaption>amor</figcaption>
            </picture>
            <picture>
                <img src="./imagens/home/cafe-2.jpg" alt="" />
                <figcaption>perfeição</figcaption>
            </picture>

            <p>O café é uma bebida produzida a partir dos grãos torrados do fruto do cafeeiro. É servido tradicionalmente quente,mas também pode ser consumido gelado - apesar de menos comum. Ele é um estimulante,por possuir cafeína — geralmente 80  a 140mg para cada 207ml dependendo do método de preparação</p>
        </article>
    );
}

export default Introducao;