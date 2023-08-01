import React from 'react';
import FiltroInput from '../../../../componentes/filtroInput/FiltroInput';

function FiltroPreco() {
    return (
        <div>
            <h3>Preço</h3>
            <div className="filtro_inputs">
                <FiltroInput filtros={'Até R$20,00'} chaves={'preco'}/>
                <FiltroInput filtros={'Maior do que R$20,00'} chaves={'preco'}/>
            </div>
        </div>
    );
}

export default FiltroPreco;