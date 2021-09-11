import { makeStyles } from '@material-ui/core';
import { darken } from 'polished';

import colors from '../../styles/colors';

export default makeStyles((theme) => ({
  loading: {
    width: '100%',
    height: '100%',
    minHeight: 250,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatar: {
    width: 78,
    height: 78,

    [theme.breakpoints.down('sm')]: {
      width: 42,
      height: 42,
    },
  },

  name: {
    fontSize: 32,
    fontWeight: 500,
    color: colors.blue,

    [theme.breakpoints.down('sm')]: {
      fontSize: 22,
    },
  },

  divider: {
    borderBottom: '1px solid #E9ECFF',
    marginBottom: 18,
  },

  title: {
    fontSize: 28,
    fontWeight: 500,
    color: colors.black,
    marginBottom: 10,

    [theme.breakpoints.down('sm')]: {
      fontSize: 18,
    },
  },

  label: {
    fontSize: 16,
    fontWeight: 500,
    color: colors.black,
    marginBottom: 10,
    paddingRight: 8,
  },

  value: {
    fontSize: 14,
    fontWeight: 'normal',
    color: colors.black,
    display: 'inline-block',
  },
}));
