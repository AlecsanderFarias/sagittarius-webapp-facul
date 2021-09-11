import { makeStyles } from '@material-ui/core';
import { darken } from 'polished';

import colors from '../../styles/colors';

const drawerWidth = '90%';

export default makeStyles((theme) => ({
  drawer: {
    width: '100%',
    flexShrink: 0,

    [theme.breakpoints.up('sm')]: {
      width: 'fit-content',
    },
  },
  drawerPaper: {
    width: '100%',
    background: colors.blue,
    boxShadow: 'none',
    borderRadius: 0,

    [theme.breakpoints.up('sm')]: {
      maxWidth: 350,
    },
  },
  routeList: {
    padding: 40,
  },

  drawerHeader: {
    width: '100%',
    padding: '30px 47px !important',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  logo: {
    width: '100%',
  },
  menuButton: {
    marginLeft: 50,
  },
  menuIcon: {
    color: '#fff',
    fontSize: 34,
  },

  routeGrid: {
    marginBottom: 10,
  },

  routeButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 16,
    borderRadius: 12,
    color: '#fff',
    background: colors.blue,
    fontSize: 16,
    textTransform: 'none',

    '&:hover': {
      background: '#EFEFEF',
      color: colors.blue,
    },
  },

  icon: {
    maxWidth: 26,
    maxHeight: 26,
    marginRight: 10,
  },

  selected: {
    background: '#EFEFEF',
    color: colors.blue,
  },
}));
