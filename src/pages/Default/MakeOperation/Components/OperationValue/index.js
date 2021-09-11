import { Grid } from "@material-ui/core";
import useStyles from "./styles";

import Input from "../../../../../Components/Input";

const typeTitle = {
  withdraw: "Valor para Saque",
  deposit: "Valor para Depósito",
  transfer: "Valor para Transferencia",
  payment: "Valor da conta",
};

export default function OperationValue({ data, setData, type }) {
  const classes = useStyles();

  return (
    <>
      <Grid item xs={12}>
        <Input name="value" label={typeTitle[type]} type="number" />
      </Grid>

      <Grid item xs={12}>
        <Input name="reason" label="Motivo (opcional)" />
      </Grid>
    </>
  );
}
