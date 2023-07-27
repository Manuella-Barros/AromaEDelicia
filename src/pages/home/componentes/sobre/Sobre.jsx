import React from 'react';
import SobreItem from './SobreItem';

const conteudo = [
    {
        titulo: 'Paulista',
        texto: 'As condições climáticas não eram as melhores nessa primeira escolha e, entre 1800 e 1850, tentou-se o cultivo noutras regiões: o João Alberto Castelo Branco trouxe mudas do Pará',
        cor: 'brown'
    },
    {
        titulo: 'Carioca',
        texto: 'As condições climáticas não eram as melhores nessa primeira escolha e, entre 1800 e 1850, tentou-se o cultivo noutras regiões: o João Alberto Castelo Branco trouxe mudas do Pará',
        cor: 'orange'
    },
    {
        titulo: 'Mineiro',
        texto: 'As condições climáticas não eram as melhores nessa primeira escolha e, entre 1800 e 1850, tentou-se o cultivo noutras regiões: o João Alberto Castelo Branco trouxe mudas do Pará',
        cor: 'green'
    }
]

function Sobre() {
    return (
        <section id='main_sobre'>
                <section id='conteudo_sobre'>
                    {
                        conteudo.map((con, i) => {
                            return <SobreItem key={i} titulo={con.titulo} texto={con.texto} cor={con.cor}/>
                        })
                    }
                </section>

                <button>Saiba Mais</button>
        </section>
    );
}

export default Sobre;