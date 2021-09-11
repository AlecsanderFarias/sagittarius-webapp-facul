/* eslint-disable import/no-anonymous-default-export */
import * as Yup from "yup";

export default async (data) => {
  const schema = Yup.object().shape({
    name: Yup.string().required("Nome é obrigatório."),
    email: Yup.string()
      .required("O email é obrigatório.")
      .email("Insira uma email válido."),
    password: Yup.string().required("A senha é obrigatória."),
    password2: Yup.string().oneOf(
      [Yup.ref("password")],
      "As senhas devem ser iguais."
    ),
  });

  await schema.validate(data, { abortEarly: false });
};
