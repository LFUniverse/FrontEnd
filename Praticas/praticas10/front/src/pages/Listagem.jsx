function Listagem (props) {
    return (
        <ul>
            <li>
                <span>Nome</span>
                <span>Telefone</span>
                <span>Ações</span>
            </li>
            {props.itens.map((contato, key) => (
                <li id={key}>
                    <span>{contato.nome}</span>
                    <span>{contato.telefone}</span>
                    <span>
                    <button onClick={(e) => props.trataAtualizar(contato.id)}> Atualizar </button>
                    <button onClick={(e) => props.trataRemover(contato.id)}> Remover </button>
                    </span>
                </li>
            ))}
        </ul>
    );
}

export default Listagem;