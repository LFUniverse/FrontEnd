import axios from "axios";

const url = import.meta.env.VITE_API_URL;

function buscarTodos () {
    return axios
    .get(url)
    .then((response) => {
        return {sucesso: true, dados: response.data};
    })
    .catch((error) => {
        return {sucesso: false, mensagem: error.message}
    });
}

function buscar (id) {
    return axios.get (`${url}/${id}`)
    .then((response) => {
        return {sucesso: true, dados: response.data };
    })
    .catch((error) => {
        return {sucesso: false, mensagem: error.message};
    });
}

function adicionar (contato) {
    return axios
    .post(url, contato)
        .then(( response ) => {
            return {sucesso: true, dados: response.data}; 
            })   //then = se der certo  // sucesso manda os dados
        .catch(( error ) => { 
            return {sucesso: false, mensagem: error.mensagem}; 
        });   //catch = se der errado  // deu ruim manda mensagem
}

function atualizar (contato) {
 return axios
    .put (`${url}/${contato.id}`, {
        nome: contato.nome,
        telefone: contato.telefone,
    })
    .then((response) => {
        return {sucesso: true, dados: response.data};
    })
    .catch((error) => {
        return {sucesso: false, mensagem: error.mensagem};
    });
    }


function remover (id) {
    return axios
    .delete(`${url}/${id}`)
    .then((response) => {
        return {sucesso: true, dados: response.data};
    })
    .catch((error) => {
        return {sucesso: false, mensagem: error.mensagem};
    });
}

export { buscarTodos, buscar, adicionar, atualizar, remover };