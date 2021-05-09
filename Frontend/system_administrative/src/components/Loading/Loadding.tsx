import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Grid, Container } from '@material-ui/core';
import LoaddingStyles from './styles/LoaddingStyles'
export const Loadding = () => {
  const useStyles = LoaddingStyles;
  const classes = useStyles();
  return (
    <Grid container spacing={1} className={classes.loadingDiv}>
      <Grid item xs={12}>
        <Container className={classes.loading}>
          <CircularProgress size={100} disableShrink />
        </Container>
      </Grid>
    </Grid>
  );
}
