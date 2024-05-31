import { useForm } from "react-hook-form";
import "./styles.css";
import { RegisterForm } from "../../interface/pages/register";
import { yupResolver } from "@hookform/resolvers/yup";
import { Registerschema } from "../../schemas/register";
import { useAuth } from "../../contexts/AuthContext";

export const Register: React.FC = () => {
  const { createUser, error, loading } = useAuth();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<RegisterForm>({
    resolver: yupResolver(Registerschema)
  });

  const onSubmit = async (data: RegisterForm) => {
    await createUser(data);
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
            autoComplete="name"
          />
          {errors.displayName && (<p className="error">{errors.displayName.message}</p>)}
        </label>
        <label>
          <span>E-mail:</span>
          <input
            type="email"
            placeholder="E-mail do usuário"
            {...register("email", { required: true })}
            autoComplete="email"
          />
          {errors.email && (<p className="error">{errors.email.message}</p>)}
        </label>
        <label>
          <span>Senha:</span>
          <input
            type="password"
            placeholder="Insira a senha"
            {...register("password", { required: true })}
            autoComplete="new-password"
          />
          {errors.password && (<p className="error">{errors.password.message}</p>)}
        </label>
        <label>
          <span>Confirmação de senha:</span>
          <input
            type="password"
            placeholder="Confirme a senha"
            {...register("confirmPassword", { required: true })}
            autoComplete="new-password"
          />
          {errors.confirmPassword && (<p className="error">{errors.confirmPassword.message}</p>)}
        </label>
        <button className="btn" disabled={loading}>Cadastrar</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

