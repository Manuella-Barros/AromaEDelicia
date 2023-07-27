import React from 'react';
import FiltroInput from '../../../../componentes/filtroInput/FiltroInput';

function FiltroPreco() {
    return (
        <div>
            <h3>Preço</h3>
            <div className="filtro_inputs">
                <FiltroInput filtro={'R$1,00 - R$20,00'}/>
                <FiltroInput filtro={'Maior do que R$20,00'}/>
            </div>
        </div>
    );
}

export default FiltroPreco;