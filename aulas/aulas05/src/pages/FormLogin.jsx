import {useState} from "react";
import Botao from "../Componentes/Botao";
import InputEmail from "../Componentes/InputEmail";
import InputSenha from "../Componentes/InputSenha";

function FormLogin (props) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const aoClicar = (e) => {
        e.preventDefault();
        props.navegaPara("/home")
        //fazer a chamado ao backend
    }

    return (
        <>
        <InputEmail valor={email} mudaValor={setEmail}/>
        <InputSenha valor={senha} mudaValor={setSenha}/>
        <Botao texto="Entrar" aoClicar={aoClicar}/>
        </>
    )
}

export default FormLogin;