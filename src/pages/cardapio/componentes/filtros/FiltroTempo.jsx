import React from 'react';
import FiltroInput from '../../../../componentes/filtroInput/FiltroInput';

function FiltroTempo() {
    return (
        <div>
            <h3>Tempo</h3>
            <div className="filtro_inputs">
                <FiltroInput filtro={"rapido"} />
                <FiltroInput filtro={"demorado"} />
            </div>
        </div>
    );
}

export default FiltroTempo;