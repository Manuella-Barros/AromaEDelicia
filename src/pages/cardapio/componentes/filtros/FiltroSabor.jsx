import React from 'react';
import FiltroInput from '../../../../componentes/filtroInput/FiltroInput';

function FiltroSabor() {
    return (
        <div>
            <h3>Sabor</h3>
            <div className="filtro_inputs">
                <FiltroInput filtros={"forte"} chaves={"sabor"}/>
                <FiltroInput filtros={"fraco"} chaves={"sabor"}/>
                <FiltroInput filtros={"descafeinado"} chaves={"sabor"}/>
            </div>
        </div>
    );
}

export default FiltroSabor;