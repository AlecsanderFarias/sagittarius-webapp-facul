import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  text: {
    fontSize: 14,
    fontWeight: 400,
  },
  cell: {
    borderBottom: 'none',
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 10,
    paddingBottom: 10,
  },

  grid: {
    borderRight: '1px solid #F3F3F3',
  },
}));
