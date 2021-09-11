import { useState, useEffect } from "react";
import { Grid, Typography, Button, IconButton } from "@material-ui/core";
import AirplanemodeActiveIcon from "@material-ui/icons/AirplanemodeActive";
import useStyles from "./styles";

import { toast } from "react-toastify";

import AutoComplete from "../../../../../Components/Input/AutoComplete";
import Input from "../../../../../Components/Input";

import api from "../../../../../services/api";

const title1 = {
  withdraw: "Origem",
  deposit: "Destino",
  transfer: "Origem",
  payment: "Origem",
};

const title2 = {
  transfer: "Destino",
};

export default function SelectAccount({ data, setData, type, error }) {
  const classes = useStyles();
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

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

  function selectAccount(account) {
    if (type === "from") {
      setData((prev) => ({ ...prev, account }));
    }
  }

  useEffect(() => {
    getMyAccounts();
  }, [search]);

  return (
    <Grid item xs={12}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography className={classes.title}>
            {`Dados da conta ${
              type === "from" ? title1[data.type] : title2[data.type]
            }`}
          </Typography>
        </Grid>
        {type === "from" ? (
          <Grid item xs={12}>
            <AutoComplete
              error={
                (!loading &&
                  accounts.length === 0 &&
                  "Sem contas correspondentes") ||
                error
              }
              noOptionsText="Sem contas Correspondente"
              variant="outlined"
              value={data.account}
              defaultValue={data.account}
              onChange={selectAccount}
              options={accounts}
              loading={loading}
              searchValue={search}
              onChangeSearchValue={setSearch}
              renderCampLabel="numeroConta"
              renderCampName="numeroConta"
              inputType={1}
              name="account"
              label={`Conta ${title1[data.type]}`}
            />
          </Grid>
        ) : (
          <Grid item xs={12}>
            <Input name="contaDestino" label="Conta Destino" fullWidth />
          </Grid>
        )}
      </Grid>
    </Grid>
  );
}
