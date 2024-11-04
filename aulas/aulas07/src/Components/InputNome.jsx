
function InputNome (props) {
    const regras = {
        required: {value: true, message: "Nome é obrigatorio"},
        maxLenght: {
            value: 100,
            message: "O nome deve ter no máximo 100 caracteres",
        },
    };

    return (
        <>
            <label htmlFor="nome">Nome</label>
            <input type="text" {...props.register("nome", regras)} />
            {props.error && <P>{props.error.message}</P>}
        </>
    );
}

export default InputNome;