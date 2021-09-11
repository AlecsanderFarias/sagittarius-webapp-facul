import { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import Button from "../../../Components/Button";
import * as Yup from "yup";

import { toast } from "react-toastify";

import api from "../../../services/api";

import useStyles from "./styles";

import { useHistory } from "react-router-dom";

import SelectType from "./Components/SelectType";
import SelectAccount from "./Components/SelectAccount";
import OperationValue from "./Components/OperationValue";
import validator from "./validator";

import Input from "../../../Components/Input";

import { Form } from "@unform/web";

export default function MakeOperation() {
  const me = useSelector((state) => state.user.me);
  const form = useRef();
  const history = useHistory();
  const classes = useStyles();
  const [data, setData] = useState({});
  const [errorAccount, setErrorAccount] = useState("");

  const ComponentsByType = () => {
    if (!data.type) {
      return <SelectType data={data} setData={setData} />;
    }

    return (
      <>
        <SelectAccount
          type="from"
          data={data}
          setData={setData}
          error={errorAccount}
        />

        <OperationValue type={data.type} />

        {data.type === "transfer" && (
          <div className={classes.otherInfo}>
            <SelectAccount type="to" data={data} setData={setData} />
          </div>
        )}

        {data.type === "payment" && (
          <Grid item xs={12}>
            <Input name="bill" label="Nome da empresa" />
          </Grid>
        )}
      </>
    );
  };

  async function submit(preData) {
    if (!data.account) {
      setErrorAccount("A conta origem é obrigatório");

      return;
    }

    form.current.setErrors({});

    setErrorAccount("");
    try {
      await validator(preData, data.type === "transfer");

      await api.post("/transacao", {
        type: data.type,
        conta: data.account._id,
        ...preData,
        user: me._id,
      });

      toast.success("Operação efetuada com sucesso!");

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

  function cancel() {
    history.push("/dashboard");
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Form ref={form} onSubmit={submit}>
          <Grid container spacing={2}>
            {ComponentsByType()}
          </Grid>
        </Form>
      </Grid>

      <Grid item xs={12} style={{ marginTop: 20 }}>
        <Grid container spacing={2}>
          {data.type ? (
            <Grid item onClick={() => form.current.submitForm()}>
              <Button>Efetuar Operação</Button>
            </Grid>
          ) : (
            <Grid item>
              <Button onClick={cancel}>Cancelar</Button>
            </Grid>
          )}

          {data.type && (
            <Grid item>
              <Button onClick={() => setData({})}>Cancelar</Button>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}

//saque
//pagamento
//depósito
//transferencia
