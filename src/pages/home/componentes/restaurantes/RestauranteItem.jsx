import React from 'react';

function RestauranteItem({img, nome, descricao}) {
    return (
        <section className='restaurante_item'>
            <picture>
                <img src={img} alt="" />
            </picture>

            <div>
                <h1>{nome}</h1>
                <p>{descricao}</p>
            </div>
        </section>
    );
}

export default RestauranteItem;