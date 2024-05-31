import { useForm } from "react-hook-form";
import "./styles.css";
import { LoginForm } from "../../interface/pages/login";
import { yupResolver } from "@hookform/resolvers/yup";
import { Loginschema } from "../../schemas/login";
import { useAuth } from "../../contexts/AuthContext";

export const Login = () => {
  const { login } = useAuth();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: yupResolver(Loginschema),
  });

  const onSubmit = async ({ email, password }: LoginForm) => {
    await login({ email, password });
  };

  return (
    <div className="login">
      <h1>Entrar</h1>
      <p>Faça o login para poder utilizar o sistema</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <span>E-mail:</span>
          <input
            type="email"
            placeholder="E-mail do usuário"
            {...register("email", { required: true })}
          />
          {errors.email && <p className="error">{errors?.email?.message}</p>}
        </label>
        <label>
          <span>Senha:</span>
          <input
            type="password"
            placeholder="Insira a senha"
            {...register("password", { required: true })}
          />
          {errors.password && <p className="error">{errors?.password?.message}</p>}
        </label>
        <button className="btn" type="submit">Entrar</button>
      </form>
    </div>
  );
};
