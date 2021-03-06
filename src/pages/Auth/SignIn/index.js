import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Paper, Container, Grid, Typography } from "@material-ui/core";

import useStyles from "./styles";
import Input from "../../../Components/Input";
import Button from "../../../Components/Button";
import { Form } from "@unform/web";
import validator from "./validator";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { signInRequest } from "../../../store/modules/auth/actions";

import logo from "../../../assets/logo2.svg";

function SignIn() {
  const history = useHistory();
  const classes = useStyles();
  const loading = useSelector((state) => state.auth.loading);
  const dispatch = useDispatch();
  const form = React.useRef();

  async function submit(data) {
    form.current.setErrors({});
    try {
      await validator(data);

      const { email, password } = data;

      dispatch(signInRequest(email, password));
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

  function goHome() {
    history.push("home");
  }

  function signUp() {
    history.push("/signUp");
  }

  return (
    <Grid container spacing={2} xs={12}>
      <Grid item xs={12}>
        <div className={classes.header}>
          <Typography className={classes.headerTitle} onClick={goHome}>
            <span
              style={{ fontSize: 44, fontWeight: "bold", marginRight: 10 }}
            >{`< `}</span>
            Home
          </Typography>
        </div>
      </Grid>

      <Grid item xs={12}>
        <Container maxWidth="md">
          <Grid container spacing={6}>
            <Grid item xs={12} md={4}>
              <img src={logo} />

              <Typography className={classes.logo}>
                SAGITTARIUS <span className={classes.subLogo}>Bank</span>
              </Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              <Form style={{ width: "100%" }} ref={form} onSubmit={submit}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography className={classes.login}>Login</Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <Input name="email" label="Usu??rio (E-mail)" />
                  </Grid>

                  <Grid item xs={12}>
                    <Input name="password" label="Senha" type="password" />
                  </Grid>

                  <Grid item xs={12}>
                    <Grid
                      container
                      spacing={6}
                      alignItems="center"
                      style={{ marginTop: 10 }}
                    >
                      <Grid item xs={12} lg={6}>
                        <Button
                          loading={loading}
                          fullWidth
                          disabled={loading}
                          onClick={() => form.current.submitForm()}
                          buttonType={"submit"}
                        >
                          Entrar
                        </Button>
                      </Grid>

                      <Grid item xs={12} lg={6}>
                        <Typography className={classes.forgot}>
                          Esqueci minha senha
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item xs={12}>
                    <Typography className={classes.forgot} onClick={signUp}>
                      N??o tenho conta
                    </Typography>
                  </Grid>
                </Grid>
              </Form>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </Grid>
  );
}

export default SignIn;
