import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  closeDiv: {
    padding: 25,

    display: 'flex',
    justifyContent: 'flex-end',

    [theme.breakpoints.up('md')]: {
      position: 'absolute',
      right: 0,
    },
  },

  content: {
    overflowY: 'scroll',

    padding: '40px 100px',
    [theme.breakpoints.down('sm')]: {
      padding: '10px 20px 30px 20px',
    },
  },
}));
