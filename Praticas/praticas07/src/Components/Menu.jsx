import { NavLink } from "react-router-dom";

function Menu () {
    const opcoes = [
        {rota:"/home", Texto:"Home"},
        {rota:"/perfil", Texto:"Perfil"},
        {rota:"/login", texto:"Sair"}
    ];
    return (
        <nav>
            <ul>
                {opcoes.map((opcoes, index) => (
                    <li key={index}>
                        <NavLink to={opcao.rota}>{opcao.texto}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Menu;