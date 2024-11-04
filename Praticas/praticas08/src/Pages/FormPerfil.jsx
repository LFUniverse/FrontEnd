import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

function FromPerfil () {
    const {register, handleSubmit, formState: {errors}} = useForm ();
    const {id} = useParams();
    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <form action="">

        </form>
    );
}

export default FromPerfil;