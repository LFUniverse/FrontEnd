import './Login.css'
import Conteudo from "../Componentes/Conteudo";
import Rodape from "../Componentes/RodaPe";
import Icone from "../Componentes/Icone";
import Titulo from "../Componentes/Titulo";
import InputEmail from "../Componentes/InputEmail";
import InputSenha from "../Componentes/InputSenha";
import Botao from "../Componentes/Botao";
import Link from "../Componentes/Link";

function Login (props) {
    return (
        <>
        <Conteudo estilo="login-container">
            <Icone imagem="" texto="Logo da Aplicação"/>
            <Titulo texto="Aluno Online" />
            <InputEmail />
            <InputSenha />
            <Botao texto="Entrar"/>
            <Link texto="Esqueceu a Senha?" />
        </Conteudo>
        <Rodape texto="Copyright (C) 2024" />
        </>
    );
}

export default Login;