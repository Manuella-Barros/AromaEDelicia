import React from 'react';

function Produto({produto}) {
    return (
        <div className="produto">
            <picture>
                <img src={produto.src} alt="" />
                <figcaption>R${produto.preco}</figcaption>
            </picture>
            <p>{produto.nome}</p>
        </div>
    );
}

export default Produto;