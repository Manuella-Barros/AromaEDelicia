import React from 'react';

async function getProdutos(categoria, filtro = null) {
    // const request = await fetch("../data/data.json")
    //     .then((res) => res.json())
    //     .then((res) => res[categoria]);
    
    //     return request
    const request = await fetch("../data/data.json").then((res) => res.json())
    let res, vetor = [];

    if(filtro == null || filtro == undefined){
        res = await request[categoria];
        return res;
    } else {
        res = await request[categoria];

        // Pega todos os valores
        const valores = res.map(r => {
                return Object.values(r);
            })

        valores.filter((valor, i) => {
            return valor.filter((v) => {
                if (v == filtro.filtro) {
                    console.log(res[i]);
                    vetor = [...vetor, res[i]];
                }
            })
        })

        return vetor;
    }        
}

export default getProdutos;