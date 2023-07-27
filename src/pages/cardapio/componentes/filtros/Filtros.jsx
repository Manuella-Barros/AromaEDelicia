import CardapioFiltro from "./CardapioFiltro";
import FiltroPreco from "./FiltroPreco";
import FiltroRecheio from "./FiltroRecheio";
import FiltroSabor from "./FiltroSabor";
import FiltroTamanho from "./FiltroTamanho";
import FiltroTempo from "./FiltroTempo";

const Filtros = {
    preco: FiltroPreco,
    tempo: FiltroTempo,
    sabor: FiltroSabor,
    tamanho: FiltroTamanho,
    recheio: FiltroRecheio
}

// {/* TODOS */}
// <FiltroPreco/>

// {/* CAFÉ */}
// <FiltroTempo/>
// <FiltroSabor/>

// {/* DONUTS */}
// <FiltroTamanho/>

export default Filtros;