function InputSenha (props) {
const regras = {
    required: 'Senha é obrigatória',
    MinLength: {
        value: 6,
        message: 'A senha deve ter pelo menos 6 caracteres'
    }
}

    return (
        <>
        <label htmlFor="senha">Senha</label>;
        <input type="password" {...props.register("senha", regras)}/>;
        <InputSenha register={register} error={errors.senha} />
        {props.error && <p>{props.error.message}</p>}
        </>
    );
}

export default InputSenha;