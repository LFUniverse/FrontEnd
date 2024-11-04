import { NavLink, Outlet } from "react-router-dom";
import "./Layout.css";

function Layout () {
    return (
        <>
            <header>
                <h1>Aluno Online</h1>
            </header>
            <main>
                <nav>
                    <ul>
                        <li><NavLink to="/Home">Home</NavLink></li>
                        <li><NavLink to="/Perfil/1">Perfil</NavLink></li>
                        <li><NavLink to="/">Sair</NavLink></li>
                    </ul>
                </nav>
                <section>
                    <Outlet />
                </section>
            </main>
        </>
    );
}

export default Layout;