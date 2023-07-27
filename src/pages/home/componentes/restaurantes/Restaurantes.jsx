import React from 'react';
import RestauranteItem from './RestauranteItem';

const conteudo = [
    {
        img: './imagens/home/botafogo.jpg',
        nome: 'Botafogo',
        descricao: 'Ascondições climáticas não eram as melhores nessa primeira escolha e,entre 1800 e 1850, tentou-se o cultivo'
    },
    {
        img: './imagens/home/iguatemi.jpg',
        nome: 'Iguatemi',
        descricao: 'Ascondições climáticas não eram as melhores nessa primeira escolha e,entre 1800 e 1850, tentou-se o cultivo'
    },
    {
        img: './imagens/home/mineirao.jpg',
        nome: 'Mineirão',
        descricao: 'Ascondições climáticas não eram as melhores nessa primeira escolha e,entre 1800 e 1850, tentou-se o cultivo'
    }
]

function Restaurantes() {
    return (
        <article id='main_restaurantes'>
            {
                conteudo.map((con, i) => {
                    return <RestauranteItem key={i} img={con.img} nome={con.nome} descricao={con.descricao}/>
                })
            }
        </article>
    );
}

export default Restaurantes;