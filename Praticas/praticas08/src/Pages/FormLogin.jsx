import { useNavigate } from "react-router-dom";
import { useForm} from "react-hook-form";
import InputEmail from "../Components/InputEmail";
import InputSenha from "../Components/InputSenha";
import Botao from "../Components/Botao";

function FormLogin () {
    const {register, handleSubmit, formstate: {erros}} = useForm();
    const navigate = useNavigate();
    const onSubmit = (data) => {console.log(data); navigate("/home");};
      
    return (
        <form onSubmit={handleSubmit(onSubmit)}></form>
        
    );
}

export default FormLogin;