import BotaoInput from '../components/BotaoSubmit';
import InputEmail from '../components/InputEmail';
import InputSenha from '../components/InputSenha';
import Rodape from '../components/Rodape';
import Titulo from '../components/Titulo';
import Logo from '../components/Logo';
import Link from '../components/Link';

function Login () {
    return (
        <>
            <main>
                <Logo />
                <Titulo />
                <InputEmail />
                <InputSenha />
                <BotaoInput />
                <Link />
            </main>
            <Rodape />
        </>
    );
}

export default Login;