import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  button: {
    background: '#EBEBEB',
    padding: 10,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  file: {
    maxWidth: '26%',
    height: 50,
    maxheight: '100%',
  },

  name: {
    fontSize: 16,
    fontWeight: 400,
    flex: 1,
    margin: '0px 15px',

    [theme.breakpoints.down('xs')]: {
      fontSize: 16,
    },
  },

  icon: {
    maxWidth: '7%',
  },
}));
