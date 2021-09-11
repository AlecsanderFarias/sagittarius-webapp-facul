import React from 'react';
import { Typography, Avatar, Grid } from '@material-ui/core';
import Loading from '../Loading';
import Button from '../Button';
import useStyles from './styles';
import Modal from '../Modal';
import colors from '../../styles/colors';
import { ReactComponent as Edit } from '../../assets/edit.svg';
import api from '../../services/api';
import File from '../File';

function UserInfo({ open, close, preData }) {
  const classes = useStyles();
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [files, setFiles] = React.useState([0, 0, 0, 0, 0]);

  async function getData() {
    try {
      setLoading(true);
      const response = await api.get(`/user/${preData._id}`);

      setData(response.data);

      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    open ? getData() : setData(null);
  }, [open]);

  return (
    <Modal open={open} close={() => close()}>
      {loading || data === null ? (
        <div className={classes.loading}>
          <Loading />
        </div>
      ) : (
        <div className={classes.container}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                  <Avatar className={classes.avatar} />
                </Grid>
                <Grid item>
                  <Typography className={classes.name}>
                    {data.name} {data.nickname}
                  </Typography>
                </Grid>
                <Grid item>
                  <Button type={3}>
                    <Edit fill={colors.blue} />
                  </Button>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} className={classes.divider} />

            <Grid item xs={12}>
              <Grid container spacing={12}>
                <Grid item xs={12}>
                  <Typography className={classes.title}>
                    Informaciones personales
                  </Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Typography className={classes.label}>
                    Documento:{' '}
                    <Typography className={classes.value}>
                      {data.doc}
                    </Typography>
                  </Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Typography className={classes.label}>
                    Dirección:{' '}
                    <Typography className={classes.value}>
                      {data.address}
                    </Typography>
                  </Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Typography className={classes.label}>
                    Fecha de admisión:{' '}
                    <Typography className={classes.value}>
                      26/11/2006
                    </Typography>
                  </Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Typography className={classes.label}>
                    Teléfono:{' '}
                    <Typography className={classes.value}>
                      +595 989 989 989
                    </Typography>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} className={classes.divider} />

            <Grid item xs={12}>
              <Grid container spacing={12}>
                <Grid item xs={12}>
                  <Typography className={classes.title}>
                    Informaciones técnicas
                  </Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Grid item container spacing={2}>
                    <Grid item xs={12}>
                      <Typography className={classes.label}>
                        Sector:{' '}
                        <Typography className={classes.value}>
                          Marketing
                        </Typography>
                      </Typography>
                    </Grid>

                    <Grid item xs={12}>
                      <Typography className={classes.label}>
                        Salario:{' '}
                        <Typography className={classes.value}>
                          R$ 2.500,38 / mês
                        </Typography>
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Grid item container spacing={2}>
                    <Grid item xs={12}>
                      <Typography className={classes.label}>
                        Actividades:{' '}
                        <Typography className={classes.value}>
                          Creación de material publicitario, piezas gráficas,
                          contenido para RRSS, captar imágenes y edición de
                          videos.
                        </Typography>
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} className={classes.divider} />

            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography className={classes.title}>
                    Archivos subidos
                  </Typography>
                </Grid>

                {files.map((item) => (
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <File data={item} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </div>
      )}
    </Modal>
  );
}

export default UserInfo;
