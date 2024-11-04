import { useNavigate } from "react-router-dom";

function Login () {
const navigate = useNavigate();

    return (
        <>
            <h2>Login</h2>
            <button onClick={() => {navigate("/home")}}>Entrar</button>
        </>
    );
}

export default Login;