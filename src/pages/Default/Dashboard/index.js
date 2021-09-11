import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Paper, Typography, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import AutoComplete from "../../../Components/Input/AutoComplete";

import api from "../../../services/api";

import { toast } from "react-toastify";

import { getMeSuccess } from "../../../store/modules/user/actions";

import useStyles from "./styles";

export default function Dashboard() {
  const history = useHistory();
  const dispatch = useDispatch();
  const me = useSelector((state) => state.user.me);

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const [accounts, setAccounts] = useState([]);
  const [search, setSearch] = useState("");

  const classes = useStyles();

  function goExtract() {
    history.push(`/extract/${data.numeroConta}`);
  }

  function selectAccount(account) {
    setData(account);
  }

  async function getMyAccounts() {
    try {
      setLoading(true);

      const response = await api.get("/conta/me", {
        params: {
          perPage: 80,
          page: 1,
        },
      });

      setAccounts(response.data.data);
    } catch (error) {
      toast.error(
        error?.response?.data?.error ||
          "Ocorreu algum erro e não conseguimos listar suas contas, tente novamente mais tarde!"
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getMyAccounts();
  }, [search]);

  /* 
  async function getData() {
    try {
      setLoading(true);

      const response = await api.get("/dashboard");

      setData(response.data);
    } catch (error) {
      toast.error(
        error?.response?.data?.error ||
          "Ocorreu algum erro, tente novamente mais tarde."
      );
    } finally {
      setLoading(false);
    }
  }
 */

  function createAccount() {
    history.push("/account/new");
  }

  console.log({ account: me.account });

  return (
    <Grid container spacing={2} xs={12}>
      {!data ? (
        <>
          <Grid item xs={12}>
            <AutoComplete
              error={
                !loading &&
                accounts.length === 0 &&
                "Sem contas correspondentes (Possibilidade de não ter conta cadastrada.)"
              }
              noOptionsText="Sem contas Correspondente"
              variant="outlined"
              value={null}
              defaultValue={null}
              onChange={selectAccount}
              options={accounts}
              loading={loading}
              searchValue={search}
              onChangeSearchValue={setSearch}
              renderCampLabel="numeroConta"
              renderCampName="numeroConta"
              inputType={1}
              name="account"
              label="Selecionar conta"
            />
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item>
                <Button
                  className={classes.button}
                  onClick={createAccount}
                  style={{ marginLeft: "auto" }}
                >
                  Criar conta
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </>
      ) : (
        <>
          <Grid item xs={12}>
            <Grid container spacing={2} justifyContent="flex-end">
              <Grid item>
                <Typography className={classes.number}>
                  Conta {data?.tipo_conta} | Nº {data?.numeroConta}
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Grid container spacing={2} xs={12} alignItems="center">
                <Grid item xs={12} md={4}>
                  <Typography className={classes.label}>Saldo:</Typography>
                </Grid>

                <Grid item xs={12} md={8}>
                  <Typography className={classes.value}>
                    R$ {data?.saldo}
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item>
                <Button className={classes.button} onClick={goExtract}>
                  Ver Extrato
                </Button>
              </Grid>

              <Grid item>
                <Button
                  className={classes.button}
                  onClick={() => selectAccount(null)}
                >
                  Ver outra conta
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </>
      )}
    </Grid>
  );
}
