import { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { Grid, Typography } from "@material-ui/core";
import { Form } from "@unform/web";
import * as Yup from "yup";
import { toast } from "react-toastify";

import { useHistory } from "react-router-dom";

import Select from "../../../Components/Input/Select";
import Button from "../../../Components/Button";
import api from "../../../services/api";

import useStyles from "./styles";
import validator from "./validator";

const options = [
  {
    name: "Corrente",
    value: "corrente",
  },
  {
    name: "Poupança",
    value: "poupanca",
  },
];

export default function Account() {
  const classes = useStyles();
  const form = useRef();
  const history = useHistory();

  const me = useSelector((state) => state.user.me);
  const [loading, setLoading] = useState(false);

  async function submit(data) {
    form.current.setErrors({});
    try {
      await validator(data);

      await api.post("/conta", {
        ...data,
        user: me._id,
      });

      toast.success("Conta criada com sucesso!");

      history.push("/account");
    } catch (error) {
      const validationErrors = {};
      if (error instanceof Yup.ValidationError) {
        error.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });

        form.current.setErrors(validationErrors);
      } else {
        toast.error(
          error?.response?.data?.error ||
            "Ocorreu algum erro, tente novamente mais tarde."
        );
      }
    }
  }

  function goBack() {
    history.push("/account");
  }

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography className={classes.title}>Cria Conta</Typography>
        </Grid>

        <Grid item xs={12}>
          <Form ref={form} onSubmit={submit}>
            <Grid container sapcing={2}>
              <Grid item xs={12}>
                <Select
                  name="type"
                  options={options}
                  campValue="value"
                  campLabel="name"
                  label="Tipo de conta"
                />
              </Grid>
              <Grid item xs={12} style={{ marginTop: 20 }}>
                <Button
                  loading={loading}
                  disabled={loading}
                  onClick={() => form.current.submitForm()}
                >
                  Criar conta
                </Button>
              </Grid>

              <Grid item xs={12} style={{ marginTop: 20 }}>
                <Button disabled={loading} onClick={goBack}>
                  Cancelar
                </Button>
              </Grid>
            </Grid>
          </Form>
        </Grid>
      </Grid>
    </div>
  );
}
