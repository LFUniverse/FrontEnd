function Menu (props) {
    const opcoes = [
        {rota: "/Login", Text: "Sair"},
        {rota: "/home", Text: "Home"},
        {rota: "/Perfil", Text: "Perfil"}
    ]

const aoClicar = (e) => {
    e.preventDefaul();
    const rota = e.target.getAttribute ("herf") ;
    props.navegaPara (rota);
}

    return (
        <nav>
            <ul>
                {opcoes.map((opcao, index) => (
                    <li key={index}>
                        <a href={opcao.rota} onClick={aoClicar}>{opcao.texto}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Menu;