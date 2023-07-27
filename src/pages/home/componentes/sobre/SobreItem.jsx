import React from 'react';

function SobreItem({titulo, texto, cor}) {
    return (
        <article className='sobre_item'>
            <i className="fa-solid fa-mug-hot" style={{color: cor}}></i>
            <h2>{titulo}</h2>
            <p>{texto}</p>
        </article>
    );
}

export default SobreItem;