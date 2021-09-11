import React from "react";
import Button from "../index";
import { Typography, Grid } from "@material-ui/core";
import { ReactComponent as File } from "../../../assets/document.svg";
import { ReactComponent as Trash } from "../../../assets/trash.svg";

import useStyles from "./styles";

function FileButton({ handleChange, data, example, ...rest }) {
  const inputRef = React.useRef(null);
  const classes = useStyles();
  const [file, setFile] = React.useState(data || null);

  function handlePreview(e) {
    const file = e.target.files?.[0];

    if (file) {
      if (handleChange) {
        handleChange(file);
      }

      if (!example) {
        setFile(file);
      }
    }
  }

  function clean() {
    setFile(null);

    if (handleChange) {
      handleChange(null);
    }
  }

  React.useEffect(() => {
    setFile(data);
  }, [data]);

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={12} sm={6}>
        <Typography noWrap>{file ? file.name : "Nuevo documento"}</Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Button
          type={file ? 2 : 0}
          style={file ? { border: "2px solid #093254", color: "#093254" } : {}}
          onClick={() => (file ? clean() : inputRef.current.click())}
        >
          {file ? (
            <Trash className={classes.icon} />
          ) : (
            <File className={classes.icon} fill={file ? "#093254" : "#fff"} />
          )}
          {file ? "Quitar archivo" : "Seleccionar archivo"}
        </Button>

        <input
          type="file"
          ref={inputRef}
          onChange={handlePreview}
          hidden
          {...rest}
        />
      </Grid>
    </Grid>
  );
}

export default FileButton;
