function InputSenha (props) {
    const regras = {
        required: {value: true, message: "Senha é obrigatorio"},
        minLength: {value: 6, message: "A senha deve ter pelo menos 6 caracteres"},
    };

    return (
        <>
            <label htmlFor="senha">Senha</label>
            <input type="password" {...props.register("senha", regras)} />
            {errors && <p>{errors.message}</p>}
        </>
    );
}

export default InputSenha;