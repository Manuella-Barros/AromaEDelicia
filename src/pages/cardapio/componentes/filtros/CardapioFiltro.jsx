import React from 'react';
import { useParams } from 'react-router-dom';
import Filtros from './Filtros';

const filtros = {
    'cafes': [<Filtros.tempo />, <Filtros.sabor />],
    'donuts': [<Filtros.tamanho />],
    'cupcakes': [<Filtros.recheio />],
};

function CardapioFiltro() {
    const params = useParams();
    
    return (
        <section className='main_filtro'>
            <Filtros.preco/>

            {
                filtros[params['*']].map((filtro) => {
                    return filtro;
                })
            }
        </section>
    );
}

export default CardapioFiltro;