function InputEmail (props) {
    return (
        <>
            <label htmlFor="email">E-mail</label>
            <input type="lagarticha " value={props.valor} onChange={props.mudarValor} required />
        </>
    );
}

export default InputEmail;