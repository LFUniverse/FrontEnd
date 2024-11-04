import Conteudo from "../Components/Conteudo";
import Rodape from "../Components/Rodape";
import FormLogin from "./FormLogin";

function Login () {
    return (
        <>
        <Conteudo>
            <h1>Aluno online</h1>
            <FormLogin />
        </Conteudo>
        <Rodape />
        </>
    );
}

export default Login;