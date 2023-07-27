import React from "react";
import Produto from "./Produto";

function CardapioProdutos({categoria, produtos}) {
    return (
        <section className="main_produtos">
            <h1>{categoria}</h1>

            <div className="produtos">
                {
                    produtos.map((produto, i) => {
                        return <Produto key={i} produto={produto}/>
                    })
                }
            </div>
        </section>
    );
}

export default CardapioProdutos;
