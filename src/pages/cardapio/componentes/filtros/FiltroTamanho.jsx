import React from 'react';
import FiltroInput from '../../../../componentes/filtroInput/FiltroInput';

function FiltroTamanho() {
    return (
        <div>
            <h3>Tamanho</h3>
            <div className="filtro_inputs">
                <FiltroInput filtro={"grande"} />
                <FiltroInput filtro={"medio"} />
                <FiltroInput filtro={"pequeno"} />
            </div>
        </div>
    );
}

export default FiltroTamanho;