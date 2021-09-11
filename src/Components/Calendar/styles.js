import { makeStyles } from '@material-ui/core';
import { darken } from 'polished';

import colors from '../../styles/colors';

export default makeStyles((theme) => ({
  calendar: {
    boxShadow: 'none',
    maxWidth: '100%',
  },

  input: {
    boxShadow: 'none',
    maxWidth: '100%',
    width: '100%',
  },

  calendar2: {
    boxShadow: 'none',
    maxWidth: '100%',
    width: '100%',
  },
  singleCalendar: {
    border: '1px solid #DCDCEB',
    boxShadow: '0px 4px 14px rgba(0, 0, 79, 0.05)',
    borderRadius: 8,
    maxWidth: '100%',

    [theme.breakpoints.up('lg')]: {
      fontSize: 7,
    },
  },

  singleCalendar2: {
    border: '1px solid #DCDCEB',
    boxShadow: '0px 4px 14px rgba(0, 0, 79, 0.05)',
    borderRadius: 8,
    maxWidth: '100%',
    fontSize: 8,

    [theme.breakpoints.up('lg')]: {
      fontSize: 9,
    },
  },
}));
