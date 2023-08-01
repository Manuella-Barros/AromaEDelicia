import React, { useContext } from "react";
import Produto from "./Produto";
import { GlobalContext } from "../../../context/GlobalContext";

function CardapioProdutos({categoria, produtos}) {
    const [filtrar] = useContext(GlobalContext);

    return (
        <section className="main_produtos">
            <h1>{categoria}</h1>

            <div className="produtos">
                {
                    !filtrar['filtros'] && produtos.map((produto, i) => {
                        return <Produto key={i} produto={produto}/>
                    })
                }
                {
                    filtrar['filtros'] && produtos.map((produto, i) => {
                        if (produto[filtrar["chaves"]] == filtrar["filtros"]){
                            return <Produto key={i} produto={produto}/>

                        } else if (filtrar["filtros"] == "rapido" 
                                    && produto[filtrar["chaves"]] <= 15) {
                            return <Produto key={i} produto={produto} />;

                        } else if (filtrar["filtros"] == "demorado" 
                                    && produto[filtrar["chaves"]] > 15) {
                            return <Produto key={i} produto={produto} />;

                        } else if (filtrar["filtros"].includes('Até') 
                                    && produto[filtrar["chaves"]] <= 20){
                            return <Produto key={i} produto={produto} />;

                        } else if (filtrar["filtros"].includes('Maior') 
                                    && produto[filtrar["chaves"]] > 20){
                                        
                            return <Produto key={i} produto={produto} />;
                        }
                    })
                }
            </div>
        </section>
    );
}

export default CardapioProdutos;
