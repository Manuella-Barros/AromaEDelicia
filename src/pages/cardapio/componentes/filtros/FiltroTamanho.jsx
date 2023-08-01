import React from 'react';
import FiltroInput from '../../../../componentes/filtroInput/FiltroInput';

function FiltroTamanho() {
    return (
        <div>
            <h3>Tamanho</h3>
            <div className="filtro_inputs">
                <FiltroInput filtros={"grande"} chaves={'tamanho'}/>
                <FiltroInput filtros={"medio"} chaves={'tamanho'}/>
                <FiltroInput filtros={"pequeno"} chaves={'tamanho'}/>
            </div>
        </div>
    );
}

export default FiltroTamanho;