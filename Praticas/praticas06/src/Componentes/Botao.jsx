function Botao (props) {
    return (
        <button onClick={(e) => props.navegarPara ("/home")}>{props.texto}</button>
    );
}

export default Botao;