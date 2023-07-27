import React from 'react';
import FiltroInput from '../../../../componentes/filtroInput/FiltroInput';

function FiltroSabor() {
    return (
        <div>
            <h3>Sabor</h3>
            <div className="filtro_inputs">
                <FiltroInput filtro={"forte"}/>
                <FiltroInput filtro={"fraco"}/>
                <FiltroInput filtro={"descafeinado"}/>
            </div>
        </div>
    );
}

export default FiltroSabor;