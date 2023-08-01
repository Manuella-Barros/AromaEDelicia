import React, { useContext, useEffect, useState } from "react";
import NavCategoria from "./componentes/NavCategoria";
import "./Cardapio.css";
import CardapioFiltro from "./componentes/filtros/CardapioFiltro";
import CardapioProdutos from "./componentes/CardapioProdutos";
import getProdutos from "../../utilidades/getProdutos";
import { useParams } from "react-router-dom";

function Cardapio() {
    const [produtos, setProdutos] = useState(null);
    const params = useParams();
    
    useEffect(() => {
        getProdutos(params["*"]).then((res) => setProdutos(res));
    }, [params]);
    
    return produtos != null ? (
        <main id="main_cardapio">
            <NavCategoria />

            <article id="container_cardapio">
                <CardapioFiltro />
                <CardapioProdutos categoria={params["*"]} produtos={produtos} />
            </article>
        </main>
    ) : (
        <></>
    );
}

export default Cardapio;
