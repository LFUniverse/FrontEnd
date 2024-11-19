import { useContext } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContext";

function Menu () {
    const {usuario, logout} = useContext(AuthContext);
    const navigate = useNavigate();
    const onSair = async () => {
        await logout();
        navigate("/Login");
    };
     
    return (
        <nav>
            <ul>
            <li>
                <NavLink to="/Home">Home</NavLink>
            </li>
            <li>
                <NavLink to={`/Perfil/${usuario.id}`}>Perfil</NavLink>
            </li>
            <li>
                <NavLink onClick={onSair}>Sair</NavLink>
            </li>
            </ul>
        </nav>
    );
}

export default Menu;