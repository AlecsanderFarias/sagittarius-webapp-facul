import { useState, useEffect } from "react";
import {
  Grid,
  Paper,
  Typography,
  Button,
  CircularProgress,
} from "@material-ui/core";
import { format, subMinutes } from "date-fns";

import { useHistory } from "react-router-dom";

import api from "../../../services/api";

import { toast } from "react-toastify";

import useStyles from "./styles";

const types = {
  deposit: "Deposito",
  transfer: "Transferencia",
  withdraw: "Saque",
  payment: "Pagamento",
};

export default function Dashboard({ match }) {
  const numeroConta = match?.params?.numeroConta;

  const classes = useStyles();
  const history = useHistory();

  const [loading, setLoading] = useState(false);

  const [data, setData] = useState([]);
  const [account, setAccount] = useState([]);

  async function getData() {
    if (!numeroConta) {
      backToDashboard();

      toast.error("Conta inválida!");
    }

    try {
      setLoading(true);

      const response = await api.get(`/transacao/${numeroConta}`);
      const responseAccount = await api.get(`/conta/${numeroConta}`);

      setAccount(responseAccount.data);
      setData(response.data);
    } catch (err) {
      toast.error(
        err?.response?.data?.error ||
          "Ocorreu algum erro, tente novamente mais tarde."
      );

      backToDashboard();
    } finally {
      setLoading(false);
    }
  }

  console.log(numeroConta);

  useEffect(() => {
    getData();
  }, []);

  function backToDashboard() {
    history.push("/dashboard");
  }

  return (
    <Paper className={classes.paper}>
      <Grid container spacing={2} xs={12}>
        <Grid item xs={12}>
          <Typography className={classes.title}>
            EXTRATO BANCÁRIO <br /> CONTA CORRENTE
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography className={classes.label}>
            Cliente: <span className={classes.value}>Alecsander Farias</span>
          </Typography>
        </Grid>

        {loading ? (
          <Grid item xs={12}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                padding: "100px 0px",
              }}
            >
              <CircularProgress style={{ color: "black", margin: "auto" }} />
            </div>
          </Grid>
        ) : (
          <>
            <Grid item xs={12}>
              <Typography className={classes.label}>
                Conta:
                <span className={classes.value}>{account.numeroConta}</span>
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <table className={classes.table}>
                <tr>
                  <th className={classes.headerCell}>DATA DA TRANSAÇÃO</th>
                  <th
                    className={classes.headerCell}
                    style={{ textAlign: "center" }}
                  >
                    CÓDIGO
                  </th>
                  <th
                    className={classes.headerCell}
                    style={{ textAlign: "center" }}
                  >
                    TIPO
                  </th>
                  <th
                    className={classes.headerCell}
                    style={{ textAlign: "left" }}
                  >
                    MOTIVO
                  </th>
                  <th
                    className={classes.headerCell}
                    style={{ textAlign: "right" }}
                  >
                    VALOR DA TRANSAÇÃO
                  </th>

                  <th
                    className={classes.headerCell}
                    style={{ textAlign: "right" }}
                  >
                    DESTINO
                  </th>
                </tr>

                {data.map((item) => (
                  <tr>
                    <td className={classes.bodyCell}>
                      {format(
                        subMinutes(
                          new Date(item.createdAt),
                          new Date().getTimezoneOffset()
                        ),
                        "dd/MM/yyyy"
                      )}
                    </td>

                    <td
                      className={classes.bodyCell}
                      style={{ textAlign: "center" }}
                    >
                      {types[item.type]}
                    </td>
                    <td
                      className={classes.bodyCell}
                      style={{ textAlign: "center" }}
                    >
                      {item._id}
                    </td>
                    <td
                      className={classes.bodyCell}
                      style={{
                        fontSize: 14,
                        textAlign: "left",
                        fontWeight: 500,
                      }}
                    >
                      {item.reason || "Sem motivo"}
                    </td>
                    <td
                      className={classes.bodyCell}
                      style={{ textAlign: "right" }}
                    >
                      {item.value}
                    </td>

                    <td
                      className={classes.bodyCell}
                      style={{ textAlign: "right" }}
                    >
                      {item.to
                        ? `${item.to.user?.name} - ${item.to.conta.numeroConta}`
                        : ``}
                    </td>
                  </tr>
                ))}
              </table>
            </Grid>

            <Grid item xs={12} style={{ marginTop: 20 }}>
              <Typography className={classes.label} style={{ padding: 0 }}>
                Saldo:{" "}
                <span className={classes.totalValue}>R$ {account.saldo}</span>
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Button className={classes.button} onClick={backToDashboard}>
                  Ok
                </Button>
              </div>
            </Grid>
          </>
        )}
      </Grid>
    </Paper>
  );
}
