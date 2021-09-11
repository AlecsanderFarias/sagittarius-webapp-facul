import React from "react";
import { TableRow, TableCell } from "@material-ui/core";
import useStyles from "./styles";
import clsx from "clsx";
import colors from "../../../styles/colors";
import { darken } from "polished";

function Line({ data, index, grid, cellStyle, padding }) {
  const classes = useStyles();

  const align = {
    center: "center",
    right: "flex-end",
    left: "flex-start",
  };

  return (
    <TableRow
      className={classes.tr}
      style={{ background: index % 2 === 1 ? "#F5F7FF" : "#fff" }}
    >
      {data.camps.map((item, index) => (
        <>
          {item.render ? (
            <TableCell
              align={item.align || "center"}
              className={clsx(classes.cell, grid && classes.grid)}
              style={{ ...item.customStyle }}
            >
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: align[item.align || "center"],
                  color: item.color || colors.blue,
                  ...cellStyle,

                  paddingLeft: index === 0 ? 50 : padding || 0,
                  paddingRight:
                    index === data.camps.length - 1 ? 50 : padding || 0,
                }}
              >
                {item.render()}
              </div>
            </TableCell>
          ) : (
            <TableCell
              align={item.align || "center"}
              style={{
                paddingLeft: index === 0 ? 50 : padding || 0,
                paddingRight:
                  index === data.camps.length - 1 ? 50 : padding || 0,
                color: item.color || colors.blue,
                ...cellStyle,
                ...item.customStyle,
              }}
              className={clsx(classes.text, classes.cell, grid && classes.grid)}
            >
              {item.text}
            </TableCell>
          )}
        </>
      ))}
    </TableRow>
  );

  return <div>line</div>;
}

export default Line;
