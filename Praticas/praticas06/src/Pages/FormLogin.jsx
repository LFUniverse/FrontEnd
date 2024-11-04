import InputEmail from "../Componentes/InputEmail";
import InputSenha from "../Componentes/InputSenha";
import Botao from "../Componentes/Botao";
import {useState} from "react";

function FormLogin (props) {
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    return (
        <form>
            <InputEmail valor={email} mudarValor={(e) => setEmail (e.target.value)} />
            <InputSenha valor={senha} mudarValor={(e) => setSenha (e.target.value)} />
            <Botao texto="Entrar" navegarPara={props.navegarPara} />
        </form>
    );
}

export default FormLogin;