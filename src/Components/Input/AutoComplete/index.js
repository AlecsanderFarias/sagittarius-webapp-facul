import React from "react";
import {
  Typography,
  TextField,
  CircularProgress,
  IconButton,
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { withStyles } from "@material-ui/core/styles";
// import { Container } from './styles';

const Type1 = withStyles({
  root: {
    "& input:valid + fieldset": {
      borderColor: "#fff",
      color: "#fff",
    },
    "& input:invalid + fieldset": {
      borderColor: "red",
      borderWidth: 1,
    },
    "& input:valid:focus + fieldset": {
      borderColor: "#fff",
      color: "#fff",
    },
  },
})(TextField);

function AutoComplete({
  inputType,
  label,
  value,
  defaultValue,
  onChange,
  options,
  loading,
  searchValue,
  onChangeSearchValue,
  error,
  renderCamp,
  renderCampLabelFunction,
  renderCampName,
  renderCampLabel,
  canCreate,
  create,
  ...rest
}) {
  console.log(options.map((item) => item.numeroConta));

  return (
    <>
      <Autocomplete
        value={value}
        id="asynchronous-demo"
        onChange={(event, value) => onChange(value)}
        defaultValue={defaultValue}
        getOptionLabel={(option) =>
          String(renderCampLabel ? option[renderCampLabel] : option)
        }
        renderOption={(option) =>
          renderCamp
            ? renderCamp(option)
            : String(renderCampName ? option[renderCampName] : option)
        }
        options={options}
        loading={loading}
        {...rest}
        renderInput={(params) => (
          <Type1
            {...params}
            variant="standard"
            label={label}
            error={error}
            value={searchValue}
            onChange={(e) => onChangeSearchValue(e.target.value)}
            InputProps={{
              ...params.InputProps,

              endAdornment: (
                <React.Fragment>
                  {loading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}

                  {!loading && canCreate && searchValue !== "" && (
                    <IconButton
                      style={{
                        width: 20,
                        height: 20,
                        color: "#1DB548",
                        border: "1px solid rgb(29, 181, 72)",
                      }}
                      onClick={() => create()}
                    >
                      +
                    </IconButton>
                  )}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
            }}
          />
        )}
      />
      {error && (
        <Typography color="error" variant="body2">
          {error}
        </Typography>
      )}
    </>
  );
}

export default AutoComplete;
