import Cabecalho from "../Componentes/Cabecalho";
import Conteudo from "../Componentes/Conteudo";
import InputEmail from "../Componentes/InputEmail";
import Secao from "../Componentes/Secao";
import Botao from "../Componentes/Botao";
import InputSenha from "../Componentes/InputSenha";
import Menu from "../Componentes/Menu";

function Perfil () {
    return (
        <>
            <Cabecalho></Cabecalho>
            <Conteudo>
                <Menu />
                <Secao texto="Perfil do Usuário">
                    <InputEmail />
                    <InputSenha />
                    <Botao texto="Salvar" />
                </Secao>
            </Conteudo>
        </>
    );
}

export default Perfil;