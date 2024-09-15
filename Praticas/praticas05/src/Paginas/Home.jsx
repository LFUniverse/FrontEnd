import Cabecalho from "../Componentes/Cabecalho";
import Conteudo from "../Componentes/Conteudo";
import Menu from "../Componentes/Menu";
import Secao from "../Componentes/Secao";
import Painel from "../Componentes/Painel";
import './Home.css'

function Home (props) {
    return (
        <>
        <Cabecalho></Cabecalho>
        <Conteudo>
            <Menu />
            <Secao Texto="Página Inicial">
                <div class="card-grid">
                    <Painel texto="Mural de Avisos" itens={["Inscrições para Cursos de Extensão", "Evento Maratona de Programação", "Palestra sobre Inteligência Artificial"]} />
                    <Painel texto="Agenda Acadêmica" itens={["Semana de Provas P1", "Entrega de Trabalhos", "Apresentação de TCC"]} />
                    <Painel texto="Histórico de Notas" itens={["Lógica de Programação - 5,5", "Banco de Dados - 7,8", "Engenharia de Software - 5,3"]} />
                    <Painel texto="Histórico de Faltas" itens={["Lógica de Programação - 4", "Banco de Dados - 0", "Engenharia de Software - 1"]} />
                </div>
            </Secao>
        </Conteudo>
        </>
    );
}

export default Home;