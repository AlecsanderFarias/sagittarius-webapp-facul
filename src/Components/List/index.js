import React from "react";
import Line from "./Line";
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  Paper,
  TableRow,
} from "@material-ui/core";
import useStyles from "./styles";
import tableActive from "../../assets/tableActive.svg";
import tableDisactive from "../../assets/TableDisactive.svg";
import Loading from "../Loading";

const justify = {
  center: "center",
  right: "flex-end",
  left: "flex-start",
};

export default function List({
  fields,
  camps,
  loading,
  noText,
  canInactive,
  minTh,
  grid,
  headerCellStyle,
  cellStyle,
  padding = 20,
}) {
  const classes = useStyles();

  return loading ? (
    <div className={classes.loading}>
      <Loading />
    </div>
  ) : (
    <>
      {noText && camps.length === 0 ? (
        <Typography className={classes.noText}> {noText}</Typography>
      ) : (
        <TableContainer component={Paper} className={classes.table}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                {fields.map((item, index) => (
                  <TableCell
                    className={classes.subField}
                    style={{
                      minWidth: minTh ? minTh : "fit-content",
                      paddingLeft: index === 0 ? 50 : padding || 0,
                      paddingRight:
                        index === fields.length - 1 ? 50 : padding || 0,
                      ...item.customStyle,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: justify[item.align || "center"],
                        alignItems: "center",
                        textAlign: item.textAlign || "left",
                        width: "100%",
                      }}
                    >
                      <div
                        className={classes.field}
                        onClick={() => item.onClick && item.onClick()}
                        style={
                          {
                            ...headerCellStyle,
                            justifyContent: item.align || "left",
                          } || { justifyContent: item.align || "left" }
                        }
                      >
                        {item.render ? item.render() : item.name}
                        {item.onClick && (
                          <>
                            {item.canInactive ? (
                              <img
                                alt="teste"
                                src={tableActive}
                                className={classes.icon}
                                style={{
                                  transform: `rotate(${
                                    item.state ? 0 : 180
                                  }deg)`,
                                }}
                              />
                            ) : (
                              <img
                                alt="teste"
                                src={item.state ? tableActive : tableDisactive}
                                className={classes.icon}
                              />
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {camps.map((item, index) => (
                <Line
                  data={item}
                  key={index}
                  index={index}
                  grid={grid}
                  padding={padding}
                  cellStyle={cellStyle || {}}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
}
