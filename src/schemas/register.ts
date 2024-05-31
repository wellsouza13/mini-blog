import * as yup from "yup"

export const Registerschema = yup
  .object({
    email: yup.string().required("Campo Obrigatório").email("Tem que ser do tipo e-mail @"),
    displayName: yup.string().required("Campo Obrigatório"),
    password: yup.string().required("Campo Obrigatório"),
    confirmPassword: yup
      .string()
      .required("Campo Obrigatório")
      .oneOf([yup.ref("password")], "As senhas devem ser iguais"),
  })
  .required();
