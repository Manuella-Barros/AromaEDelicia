import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getProdutos from "../utilidades/getProdutos";

export const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {
    // const [checked, setChecked] = useState(false);

    // function acaoBotao() {
    //     setChecked(!checked);
    //     // if (checked == false) {
    //     //     setChecked(true);
    //     // } else {
    //     //     setChecked(false);
    //     // }
    // }

    const [filtrar, setFiltar] = useState({});


    return (
        <GlobalContext.Provider value={[filtrar, setFiltar]}>
            {children}
        </GlobalContext.Provider>
    );
}