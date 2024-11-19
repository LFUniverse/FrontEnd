import {useForm} from "react-hook-form";
import InputEmail from "../Components/InputEmail";
import InputSenha from "../Components/InputSenha";
import Botao from "../Components/Botao";

function Formulario(props) {
    const {register, handleSubmit, formState:{errors}} = useForm({values: props.valores});

    return (
      <form onSubmit={handleSubmit(props.onEnviar)}>
        <InputEmail register={register} error={error.email} />
        <InputSenha register={register} error={error.senha} />
        <Botao texto={props.texto} />
      </form>
    );
  }
  
  export default Formulario;