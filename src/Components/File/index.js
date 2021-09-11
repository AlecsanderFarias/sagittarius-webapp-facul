import React from 'react';
import useStyles from './styles';
import file from '../../assets/file.svg';
import download from '../../assets/download.svg';
import { Button, Typography } from '@material-ui/core';

function File({ data }) {
  const classes = useStyles();
  const [error, setError] = React.useState(true);

  return (
    <Button fullWidth className={classes.button} href={data.photo}>
      <img
        alt={data.file}
        src={data.photo || file}
        className={classes.file}
        style={{ display: error ? 'none' : 'flex' }}
        onLoad={() => setError(false)}
      />
      <Typography className={classes.name} noWrap>
        {data.name ? data.name : data.type || 'Sem nome'}
      </Typography>

      <img alt="download" src={download} className={classes.icon} />
    </Button>
  );
}

export default File;
