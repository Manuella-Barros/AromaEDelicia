import React from 'react';
import FiltroInput from '../../../../componentes/filtroInput/FiltroInput';

function FiltroRecheio() {
    return (
        <div>
            <h3>Recheio</h3>
            <div className="filtro_inputs">
                <FiltroInput filtro={"maracuja"}/>
                <FiltroInput filtro={"morango"} />
                <FiltroInput filtro={"chocolate"} />
                <FiltroInput filtro={"baunilha"} />
            </div>
        </div>
    );
}

export default FiltroRecheio;