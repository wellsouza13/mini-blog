import * as yup from "yup"

export const Loginschema = yup
  .object({
    email: yup.string().required("Campo Obrigatório").email("Tem que ser do tipo e-mail @"),
    password: yup.string().required("Campo Obrigatório"),
  })
  .required()