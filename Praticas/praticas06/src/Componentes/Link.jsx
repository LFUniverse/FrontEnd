function Link (props) {
    const trataClick = (e) => {
        e.preventDevault();
        props.navegaPara (e.target.getAttribute("href"));
    }
    return (
        <a href={props.rota} onClick={trataClick} >{props.texto}</a>
    );
}

export default Link;