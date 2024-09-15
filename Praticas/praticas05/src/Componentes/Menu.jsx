import Link from './Link';
import './Menu.css'

function Menu (props) {
    const opcoes = ["Home", "Perfil", "Sair"]   
    {opcoes.map((opcao) => <li><Link texto={opcao}/></li>)} 
    return (
        <nav><ul></ul></nav>
    );
}

export default Menu;