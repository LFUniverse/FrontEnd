import Conteudo from "../Componentes/Conteudo";
import Titulo from "../Componentes/Titulo";
import FormLogin from "./FormLogin";

function Login (props) {
    return (
        <conteudo>
            <Titulo texto="Aluno Online" />
            <FormLogin navegarPara={props.navegarPara}/>
        </conteudo>
    );
}

export default Login;