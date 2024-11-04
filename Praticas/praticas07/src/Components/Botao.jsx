function Botao (props) {
    return (
        <button onClick={props.aoClick}>{props.text}</button>
    );
}

export default Botao;