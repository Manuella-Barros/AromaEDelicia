import React, { useContext, useState } from 'react';
import { GlobalContext } from '../../context/GlobalContext';

function FiltroInput({filtro}) {
    const [filtrar, setFiltrar] = useContext(GlobalContext);

    return (
        <div className="input">
            <p>{filtro}</p>
            <input onClick={() => setFiltrar({ filtro })} type="radio" name="input" id=""/>
            {console.log(filtrar)}
            {/* DESCLICAR */}
            {/* <input onClick={acaoBotao} checked={checked} type="radio" name="input" id="" /> */}
            {/* ICONE */}
            {/* <i onClick={acaoBotao} className="fa-regular fa-square-check"></i> */}
        </div>
    );
}

export default FiltroInput;