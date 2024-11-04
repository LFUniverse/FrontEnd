import { useForm } from 'react-hook-form';

function App () {
  const { 
    register, 
    handleSubmit, 
    formState: { errors },
  } = useForm();

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit((data) => console.console.log(data))}>
        <label htmlFor="">E-mail</label>
        <input type="text" 
          {...register 
            ("email", 
              {required: {
                  value: true, 
                  menager:"Email é obrigatorio."
                },
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 
                  message: "Formato de email invalido"
                },
              }
            )
          }
        />
        {errors.email && <p>{errors.email.message}</p>}

        <label>Senha</label>
        <input type="password" 
          {...register 
            ("senha", 
              {required: {
                  value: true, 
                  menager:"Senha é obrigatorio."
                },
                minLength: {
                  value: 6, 
                  message: "A senha deve ter pelo menos 6 caracteres",
                }
              },
            )
          }/>
        {errors.senha && <p>{errors.senha.message}</p>}
        
        <button>Entrar</button>
      </form>
    </>
  );
}

export default App;