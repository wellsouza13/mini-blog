import { useForm } from "react-hook-form";
import "./styles.css";
import { RegisterForm } from "../../interface/pages/register";
import { yupResolver } from "@hookform/resolvers/yup";
import { Registerschema } from "../../schemas/register";

export const Register = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<RegisterForm>({
    resolver: yupResolver(Registerschema)
  });

  const onSubmit = (data: RegisterForm) => {
    console.log("onSubmit", data);
  };
  return (
    <div className="register">
      <h1>Cadastrar</h1>
      <p>Crie seu usuário e compartilhe suas histórias</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <span>Nome:</span>
          <input
            type="text"
            placeholder="Nome do usuário"
            {...register("displayName", { required: true })}
          />
          {errors.displayName && (<p className="error">{errors.displayName.message}</p>)}
        </label>
        <label>
          <span>E-mail:</span>
          <input
            type="email"
            placeholder="E-mail do usuário"
            {...register("email", { required: true })}
          />
          {errors.email && (<p className="error">{errors.email.message}</p>)}
        </label>
        <label>
          <span>Senha:</span>
          <input
            type="password"
            placeholder="Insira a senha"
            {...register("password", { required: true })}
          />
          {errors.password && (<p className="error">{errors.password.message}</p>)}
        </label>
        <label>
          <span>Confirmação de senha:</span>
          <input
            type="password"
            placeholder="Confirme a senha"
            {...register("confirmPassword", { required: true })}
          />
          {errors.confirmPassword && (<p className="error">{errors.confirmPassword.message}</p>)}
        </label>
        <button className="btn">Cadastrar</button>
      </form>
    </div>
  );
};
