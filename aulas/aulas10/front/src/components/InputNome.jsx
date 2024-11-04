function InputNome (props) {
    const regras = {
        required: "Nome é obrigatorio",
    };

    return (
        <>
            <label htmlFor="nome">Nome</label>
            <input type="text" {...props.register ("nome", regras)}/>
            {props.error && <p>{props.error.message}</p>}
        </>
    );
}

export default InputNome;