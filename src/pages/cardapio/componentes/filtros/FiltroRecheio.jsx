import React from 'react';
import FiltroInput from '../../../../componentes/filtroInput/FiltroInput';

function FiltroRecheio() {
    return (
        <div>
            <h3>Recheio</h3>
            <div className="filtro_inputs">
                <FiltroInput filtros={"maracuja"} chaves={'recheio'}/>
                <FiltroInput filtros={"morango"} chaves={'recheio'}/>
                <FiltroInput filtros={"chocolate"} chaves={'recheio'}/>
                <FiltroInput filtros={"baunilha"} chaves={'recheio'}/>
            </div>
        </div>
    );
}

export default FiltroRecheio;