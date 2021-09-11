import { makeStyles } from '@material-ui/core';
import { darken, lighten } from 'polished';
import colors from '../../styles/colors';

export default makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  avatar: {
    width: 56,
    height: 56,
    border: '4px solid white',
  },

  left: {
    position: 'relative',
    left: -15,
  },
}));
