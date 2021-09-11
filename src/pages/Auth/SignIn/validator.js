/* eslint-disable import/no-anonymous-default-export */
import * as Yup from "yup";

export default async (data) => {
  const schema = Yup.object().shape({
    email: Yup.string()
      .required("O email é obrigatório.")
      .email("Insira uma email válido."),
    password: Yup.string().required("A senha é obrigatória."),
  });

  await schema.validate(data, { abortEarly: false });
};
