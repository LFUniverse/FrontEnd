import { useForm } from "react-hook-form";
import InputEmail from "../Components/InputEmail";
import InputSenha from "../Components/InputSenha";
import Botao from "../Components/Botao";

function FormLogin () {
    const {register, handleSubmit, fromState: {errors}} = useForm();

    return (
        <form onSubmit={handleSubmit((data) => {})}>
            <InputEmail register={register} error={errors.email} />
            <InputSenha register={register} error={errors.senha} />
            <Botao texto="Entrar" />
        </form>
    );
}

export default FormLogin;