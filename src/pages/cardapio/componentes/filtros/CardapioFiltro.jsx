import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Filtros from './Filtros';
import { GlobalContext } from '../../../../context/GlobalContext';

const filtros = {
    'cafes': [<Filtros.tempo />, <Filtros.sabor />],
    'donuts': [<Filtros.tamanho />],
    'cupcakes': [<Filtros.recheio />],
};

function CardapioFiltro() {
    const params = useParams();
    const[filtrar, setFiltrar] = useContext(GlobalContext);

    useEffect(() => {
        setFiltrar({});
    }, [params])
    
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