import { Grid, Container, Typography, Button } from "@material-ui/core";

import { useHistory } from "react-router-dom";

import logo2 from "../../../assets/logo2.svg";

import useStyles from "./styles";

export default function Home() {
  const classes = useStyles();
  const history = useHistory();

  function goLogin() {
    history.push("/");
  }

  return (
    <Grid container spacing={0} xs={12}>
      <Grid item xs={12}>
        <header className={classes.header}>
          <Typography className={classes.page}>Home</Typography>

          <Typography className={classes.title}>
            SAGITTARIUS <Typography className={classes.span}>BANK</Typography>
          </Typography>

          <Button className={classes.button} onClick={goLogin}>
            Login
          </Button>
        </header>
      </Grid>

      <Grid item xs={12}>
        <Container maxWidth="md">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Container maxWidth="xs">
                <img src={logo2} className={classes.img} />
              </Container>
            </Grid>

            <Grid item xs={12}>
              <Typography className={classes.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                hendrerit mollis suscipit. Etiam suscipit leo tempor mi
                imperdiet, ut consectetur ligula molestie. Ut rutrum est ac sem
                semper tincidunt. Suspendisse ullamcorper lacinia odio, a
                vulputate orci vestibulum in. Ut enim lorem, tristique id augue
                et, maximus tincidunt mi. Cras iaculis eu arcu vel lacinia. Cras
                luctus, massa quis consequat lobortis, augue lacus convallis
                lacus, at interdum odio dui quis turpis. Donec pretium malesuada
                nunc, quis auctor odio condimentum quis. In facilisis ex nec
                odio consectetur, non blandit nisl sodales. Sed libero massa,
                condimentum vel nisi ut, laoreet fringilla leo. Mauris et lorem
                non urna mattis accumsan. Aliquam orci turpis, feugiat vel lorem
                eu, volutpat convallis lorem. Fusce quis ultricies dolor, et
                fermentum tortor. Nam vel efficitur turpis. Aenean feugiat
                fermentum hendrerit. Integer nec malesuada dui. Aliquam sit amet
                est mi.
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography className={classes.text} style={{ marginBottom: 50 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                hendrerit mollis suscipit. Etiam suscipit leo tempor mi
                imperdiet, ut consectetur ligula molestie. Ut rutrum est ac sem
                semper tincidunt. Suspendisse ullamcorper lacinia odio, a
                vulputate orci vestibulum in. Ut enim lorem, tristique id augue
                et, maximus tincidunt mi. Cras iaculis eu arcu vel lacinia. Cras
                luctus, massa quis consequat lobortis, augue lacus convallis
                lacus, at interdum odio dui quis turpis. Donec pretium malesuada
                nunc, quis auctor odio condimentum quis. In facilisis ex nec
                odio consectetur, non blandit nisl sodales. Sed libero massa,
                condimentum vel nisi ut, laoreet fringilla leo. Mauris et lorem
                non urna mattis accumsan. Aliquam orci turpis, feugiat vel lorem
                eu, volutpat convallis lorem. Fusce quis ultricies dolor, et
                fermentum tortor. Nam vel efficitur turpis. Aenean feugiat
                fermentum hendrerit. Integer nec malesuada dui. Aliquam sit amet
                est mi.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </Grid>
  );
}
