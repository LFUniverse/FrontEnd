import {createContext, useState} from "react";
import { autentica, registrar, atualizar } from "../Services/AuthService";

const AuthContext = createContext();

function AuthProvider(props) {
    const [usuario, setUsuario] = useState({id: null, email: null, logado: false, token: null});
    

    function Login () {
        const Login = async (usuario) => {
            const resposta = await autenticar(usuario);
            if (resposta.sucesso) {
              setUsuario({id: resposta.dados.user.id, email: resposta.dados.user.email, logado:true, token: resposta.dados.accessToken});
              return ""
            } else {
              return resposta.mensagem
            }
        };
    };

    function Logout (usuario) {
        const Logout = async () => {
            setUsuario({id: null, email: null, logado: false, token: null});
        };        
    };

    function Signup (usuario) {
        const Signup = async (usuario) => {
            const resposta = await registrar(usuario);
            if (resposta.sucesso) {
              setUsuario({id: resposta.dados.user.id, email: resposta.dados.user.email, logado: true, token: resposta.dados.accessToken});
              return null
            } else {
              return resposta.mensagem
            }
        };      
    };

    function Update (usuario) {
        const Update = async (usuario) => {
            const resposta = await atualizar(usuario);
            if (resposta.sucesso) {
              return null
            } else {
              return resposta.mensagem
            }
         };
    };

    const contexto = { usuario, Login, Logout, Signup, Update }

    return (
        <AuthContext.Provider value={contexto}>
            {props.children}
        </AuthContext.Provider>
    );

}

export {AuthContext, AuthProvider};