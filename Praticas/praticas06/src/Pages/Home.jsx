import Conteudo from "../Componentes/Conteudo";
import Titulo from "../Componentes/Titulo";
import Menu from "../Componentes/Menu";

function Home (props) {
    return (
        <conteudo>
            <Titulo texto="Página Inicial" />
            <Menu navegaPara={props.navegaPara} />
        </conteudo>
    );
}

export default Home;