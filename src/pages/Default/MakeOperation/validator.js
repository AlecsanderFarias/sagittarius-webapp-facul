/* eslint-disable import/no-anonymous-default-export */
import * as Yup from "yup";

export default async (data, hasDestiny) => {
  const schema = Yup.object().shape({
    contaDestino: hasDestiny
      ? Yup.string().required("A conta Destino é obrigatório")
      : Yup.string(),
    value: Yup.number()
      .typeError("Insira um numero valido")
      .min(1, "O valor minimo é 1")
      .required("O valor é obrigatório"),
    reason: Yup.string(),
    bill: Yup.string(),
  });

  await schema.validate(data, { abortEarly: false });
};
