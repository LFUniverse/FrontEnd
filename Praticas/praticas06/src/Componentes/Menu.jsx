import Link from "./Link";

function Menu (props) {
    const opcoes = [
        {rota:"./Home", texto:"Home"},
        {rota:"./Perfil", texto:"Perfil"},
        {rota:"./Login", texto:"Sair"}
    ]
    return (
        <nav>
            <ul>
                {opcoes.map((opcao, index) =>(
                    <li key={index}>
                        <link rota={opcao.rota} texto={opcao.texto} navegaPara={props.navegaPara} />
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Menu;