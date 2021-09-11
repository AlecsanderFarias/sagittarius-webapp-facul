import { Grid, Typography, Button, IconButton } from "@material-ui/core";
import AirplanemodeActiveIcon from "@material-ui/icons/AirplanemodeActive";
import useStyles from "./styles";

const types = [
  {
    name: "Saque",
    value: "withdraw",
    icon: <AirplanemodeActiveIcon />,
  },
  {
    name: "Depósito",
    value: "deposit",
    icon: <AirplanemodeActiveIcon />,
  },
  {
    name: "Transferencia",
    value: "transfer",
    icon: <AirplanemodeActiveIcon />,
  },
  {
    name: "Pagar Conta",
    value: "payment",
    icon: <AirplanemodeActiveIcon />,
  },
];

export default function SelectType({ data, setData }) {
  const classes = useStyles();

  function handleClickType(type) {
    setData((prev) => ({ ...prev, type }));
  }

  return (
    <Grid item xs={12}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography className={classes.title}>
            Selecione o tipo de transação
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.container}>
            {types.map((item) => (
              <div className={classes.buttonDiv}>
                <IconButton
                  className={classes.button}
                  onClick={() => handleClickType(item.value)}
                >
                  {item.icon}
                </IconButton>

                <p className={classes.name}>{item.name}</p>
              </div>
            ))}
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
}
