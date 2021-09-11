import { makeStyles } from '@material-ui/core/styles';
/* import Colors from '../../styles/color'; */

export default makeStyles((theme) => ({
  container: {
    width: '100%',
    border: '1px solid #093254',
    borderRadius: 4,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: '#292929',
    padding: theme.spacing(2),
    position: 'relative',

    '&:hover': {
      border: '2px solid #093254',
    },
  },

  placeholder: {
    cursor: 'pointer',
    flex: 1,
  },

  value: {
    flex: 1,
    marginRight: 10,
  },

  lined: {
    border: '1px solid #093254',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  error: {
    //border: '1px solid #f44336',
    color: '#f44336',

    /*  '&:hover': {
      border: '2px solid #f44336',
    }, */
  },

  errorText: {
    margin: '3px 14px 0px 14px',
    color: '#f44336',
    fontSize: '0.75rem',
  },

  title: {
    color: '#093254',
    position: 'absolute',
    background: '#fff',
    padding: '0px 2px',
    top: -theme.spacing(1) - 1,
    left: theme.spacing(1),
    fontSize: '0.75em',
  },

  name: {
    fontWeight: 500,
    fontSize: 16,
  },
}));
