import { useForm } from "react-hook-form";
import InputNome from "../Components/InputNome";
import InputEmail from "../Components/InputEmail";
import InputSenha from "../Components/InputSenha";
import Botao from "../Components/Botao";

function FormPerfil () {
    const {register, handleSubmit, fromState: {errors}} = useForm();

    return (
        <form onSubmit={handleSubmit((data) => {})}>
            <InputNome register={register} error={errors.nome}/>
            <InputEmail register={register} error={errors.email} />
            <InputSenha register={register} error={errors.senha} />
            <Botao texto="Salvar" />
        </form>
    );
}

export default FormPerfil;