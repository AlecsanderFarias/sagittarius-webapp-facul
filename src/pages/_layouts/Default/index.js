import React from "react";
import { Grid, Hidden } from "@material-ui/core";
import Menu from "../../../Components/Menu";
import Header from "../../../Components/Header";
import { Container, Content } from "./styles";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function Default({ children, noMax, useCounts }) {
  const [open, setOpen] = React.useState(true);

  const [windowDimensions, setWindowDimensions] = React.useState(
    getWindowDimensions()
  );

  React.useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <Grid container spacing={0}>
        <Hidden sm smDown>
          <Grid item style={{ width: open ? 200 : 0 }}>
            <Menu open={open} trogle={() => setOpen(!open)} />
          </Grid>
        </Hidden>

        <Grid
          item
          style={{
            width: `calc(100% - ${
              open && windowDimensions.width >= 960 ? 200 : 0
            }px)`,
          }}
        >
          <Grid container spacing={0} direction="column">
            <Grid item xs={12}>
              <Header
                openMd={open}
                trogleMd={() => setOpen(!open)}
                useCounts={useCounts}
              />
            </Grid>
            <Grid item xs={12} style={{ flex: 1 }}>
              <Content style={{ justifyContent: "center" }}>
                <Container maxWidth={noMax ? "none" : "lg"}>
                  {children}
                </Container>
              </Content>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Default;
