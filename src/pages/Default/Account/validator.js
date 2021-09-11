/* eslint-disable import/no-anonymous-default-export */
import * as Yup from "yup";

export default async (data) => {
  const schema = Yup.object().shape({
    type: Yup.string().required("O tipo é obrigatório"),
  });

  await schema.validate(data, { abortEarly: false });
};
