import React from 'react';
import FiltroInput from '../../../../componentes/filtroInput/FiltroInput';

function FiltroTempo() {
    return (
        <div>
            <h3>Tempo</h3>
            <div className="filtro_inputs">
                <FiltroInput filtros={"rapido"} chaves={'tempoPreparo'}/>
                <FiltroInput filtros={"demorado"} chaves={'tempoPreparo'}/>
            </div>
        </div>
    );
}

export default FiltroTempo;