import Conteudo from "../Componentes/Conteudo";
import titulo from "../Componentes/Titulo";
import Menu from "../Componentes/Menu";

function Perfil (props) {
    return (
        <Conteudo>
            <titulo texto="Perfil do Usuario" />
            <menu navegaPara={props.navegaPara} />
        </Conteudo>
    );
}

export default Perfil;