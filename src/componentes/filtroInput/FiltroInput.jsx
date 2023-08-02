import React, { useContext, useState } from 'react';
import { GlobalContext } from '../../context/GlobalContext';

function FiltroInput({filtros, chaves}) {
    const [filtrar, setFiltrar] = useContext(GlobalContext);

    function acaoBotao(){
        if(filtrar['filtros'] == filtros){
            setFiltrar({})
        } else{
            setFiltrar({
                filtros: filtros,
                chaves: chaves,
            });
        }
    }

    return (
        <div className="input">
            <p>{filtros}</p>
            <input onClick={acaoBotao} type="radio" name="input" id="" />

            {/* DESCLICAR */}
            {/* <input onClick={acaoBotao} checked={checked} type="radio" name="input" id="" /> */}
            {/* ICONE */}
            {/* <i onClick={acaoBotao} className="fa-regular fa-square-check"></i> */}
        </div>
    );
}

export default FiltroInput;