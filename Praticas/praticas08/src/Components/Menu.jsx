import { NavLink } from "react-router-dom";

function Menu () {
    return (
        <nav>
            <ul>
                <il>
                    <Navlink to='/Home'>Home</Navlink>
                </il>
                <il>
                    <Navlink to='/Perfil'>Perfil</Navlink>
                </il>
                <il>
                    <Navlink to='/'>Sair</Navlink>
                </il>
            </ul>
        </nav>
    );
}

export default Menu;