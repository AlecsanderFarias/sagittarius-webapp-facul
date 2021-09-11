import { makeStyles } from '@material-ui/core';
import { darken } from 'polished';

import colors from '../../styles/colors';

export default makeStyles((theme) => ({
  gridMaster: {
    marginBottom: 10,
    justifyContent: 'space-between',
  },

  title: {
    color: colors.blue,
    fontSize: 28,
    fontWeight: 500,
    marginBottom: 6,
  },
  subtitle: {
    color: '#969BA0',
    fontSize: 18,
    fontWeight: 400,
  },
}));
