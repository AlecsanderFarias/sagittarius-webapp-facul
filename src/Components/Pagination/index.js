import React from "react";
import { usePagination } from "@material-ui/lab/Pagination";
import useStyles from "./styles";
import clsx from "clsx";
import { Form } from "@unform/web";
import Select from "../../Components/Input/Select";

import { ReactComponent as Prev } from "../../assets/prev.svg";
import { ReactComponent as Next } from "../../assets/next.svg";

function Pagination({
  PaginationType,
  count,
  page,
  onChange,
  total = 1,
  usePerPage,
  perPage,
  perPageChange,
  ...rest
}) {
  const { items } = usePagination({
    count: count || 10,
    page: page || 1,
    onChange: (e, page) => onChange && onChange(page),
    ...rest,
  });
  const classes = useStyles();

  return (
    <div
      className={classes.container}
      style={usePerPage ? { width: "100%", display: "flex" } : {}}
    >
      {usePerPage && (
        <div className={classes.select}>
          Por Página:
          <select
            name="perPage"
            label="Por página"
            className={classes.selectInput}
            value={perPage}
            onChange={(e) => perPageChange(e.target.value)}
          >
            {[5, 10, 50, 100, 500, 1000].map((item) => (
              <option value={item}>{item}</option>
            ))}
          </select>
          total: {total}
        </div>
      )}

      <div className={classes.content}>
        {items.map(({ page, type, selected, ...item }, index) => {
          let children = null;

          if (type === "start-ellipsis" || type === "end-ellipsis") {
            children = (
              <button
                type="button"
                className={
                  PaginationType !== 1
                    ? clsx(classes.button, classes.buttonType1)
                    : clsx(classes.button, classes.buttonType2)
                }
              >
                ...
              </button>
            );

            if (PaginationType === 1 || !PaginationType) {
            } else {
              children = "";
            }
          } else if (type === "page") {
            children = (
              <button
                type="button"
                className={
                  PaginationType !== 1
                    ? clsx(
                        classes.button,
                        classes.buttonType1,
                        classes.hover1,
                        selected && classes.selectedType1
                      )
                    : clsx(
                        classes.button,
                        classes.buttonType2,
                        classes.hover2,
                        selected && classes.selectedType2
                      )
                }
                {...item}
              >
                {page}
              </button>
            );
          } else {
            if (PaginationType !== 1 || count === 1) {
              children = "";
            } else {
              children = (
                <button
                  type="button"
                  {...item}
                  className={clsx(
                    classes.button,
                    item.disabled ? classes.disabled : classes.active
                  )}
                >
                  {type === "next" ? (
                    <Next stroke={item.disabled ? "#FEFEFE" : "#D3D6E4"} />
                  ) : (
                    <Prev stroke={item.disabled ? "#FEFEFE" : "#D3D6E4"} />
                  )}
                </button>
              );
            }
          }

          return children;
        })}
      </div>
    </div>
  );
}

export default Pagination;
