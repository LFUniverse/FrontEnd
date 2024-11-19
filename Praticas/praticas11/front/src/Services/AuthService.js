import axios from "axios";

const url = import.meta.env.VITE_API_URL;

function autentica (usuario) {

    return axios.post(`${url}/Login`, {email: usuario.email, password: usuario.senha})
        .then((response) => {
            return { sucesso: true, dados: response.data };
        })
        .catch((error) => {
            if (error.response) {
                return { sucesso: false, mensagem: error.response.data };
             } else {
                return { sucesso: false, mensagem: "Ocorreu um erro!" };
             }             
        });
}
  
function registrar (usuario) {
    return axios.post(`${url}/Registrar`, {email: usuario.email, password: usuario.senha})
        .then((response) => {
            return { sucesso: true, dados: response.data };

        })
        .catch((error) => {
            if (error.response) {
                return { sucesso: false, mensagem: error.response.data };
             } else {
                return { sucesso: false, mensagem: "Ocorreu um erro!" };
             }
             
        });
}

function atualizar (usuario) {
    return axios.put(`${url}/user/${usuario.id}`, {email: usuario.email, password: usuario.senha})
        .then((response) => {
            return { sucesso: true, dados: response.data };
        })
        .catch((error) => {
            if (error.response) {
                return { sucesso: false, mensagem: error.response.data };
             } else {
                return { sucesso: false, mensagem: "Ocorreu um erro!" };
             }
        });
}


  export {autentica, registrar, atualizar};