import React from "react";
import useStyles from "./styles";
import { Typography } from "@material-ui/core";
import { useField } from "@unform/core";
import clsx from "clsx";
import fileEx from "../../../assets/doc.svg";
import DeleteIcon from "@material-ui/icons/Delete";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";

const FileInput = ({
  onChange,
  value,
  name,
  preview,
  placeholder,
  label,
  ...rest
}) => {
  const classes = useStyles();
  const inputRef = React.useRef();
  const [change, setChange] = React.useState(false);

  const handlePreview = React.useCallback((e) => {
    const file = e?.target?.files[0];
    if (file) {
      onChange({ file });
    }

    setChange(!change);
  }, []);

  function clear() {
    onChange({ file: null, preview: null });
    setChange(!change);
  }

  return (
    <div className={classes.container}>
      {value ? (
        <Typography className={classes.value} noWrap>
          {value.name}
        </Typography>
      ) : (
        <>
          {preview ? (
            <Typography className={classes.preview} noWrap>
              {preview}
            </Typography>
          ) : (
            <Typography
              className={classes.placeholder}
              noWrap
              onClick={() => inputRef.current.click()}
            >
              {placeholder || "Selecionar arquivo"}
            </Typography>
          )}
        </>
      )}

      {(preview || value) && (
        <DeleteIcon
          style={{ color: "black", cursor: "pointer" }}
          onClick={() => clear()}
        />
      )}

      {label && (preview || value) && (
        <Typography className={classes.title}> {label}</Typography>
      )}

      <input
        type="file"
        value={value?.file}
        ref={inputRef}
        onChange={handlePreview}
        {...rest}
        hidden
      />
    </div>
  );
};

export default FileInput;
