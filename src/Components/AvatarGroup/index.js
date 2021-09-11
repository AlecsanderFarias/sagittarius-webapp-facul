import React from 'react';
import { Avatar } from '@material-ui/core';
import useStyles from './styles';
import clsx from 'clsx';

function AvatarGroup({ data, cont, campName }) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {data.map((item, index) => {
        if (index < cont - 1) {
          return (
            <Avatar
              style={{ left: index * -13 }}
              className={clsx(classes.avatar, classes.left)}
              alt="user"
              src={item[campName]}
            />
          );
        } else {
          if (index === cont - 1) {
            if (data.length === cont) {
              return (
                <Avatar
                  style={{ left: index * -13 }}
                  className={clsx(classes.avatar, classes.left)}
                  alt="user"
                  src={item[campName]}
                />
              );
            } else {
              return (
                <Avatar
                  style={{ left: index * -13 }}
                  className={clsx(classes.avatar, classes.left)}
                  alt="user"
                >
                  +{data.length + 1 - cont}
                </Avatar>
              );
            }
          } else {
            return null;
          }
        }
      })}
    </div>
  );
}

export default AvatarGroup;
