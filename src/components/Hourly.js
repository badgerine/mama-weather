import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import BarGraph from './widgets/BarGraph';
import * as functions from '../utility/functions';
import Typography from '@material-ui/core/Typography';
import { Hidden } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  graph: {
    marginTop: '0.5em',
    paddingBottom:'2em'
  }
}));

const Hourly = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const temperatureUnit = useSelector(state => state.temperatureUnit);

  return (
    <Grid container direction='column' alignItems='center' className={classes.graph}>
      <Hidden xsDown >
        <Typography style={{ fontSize: '1rem', fontWeight: 700 }}>Hourly</Typography>
        <BarGraph data={props.data.map(hourInfo => {
          let hours = (new Date(hourInfo.dt * 1000)).getHours() + ':00';
          const temperature = functions.displayTemp(hourInfo.temp, temperatureUnit);
          return { hours, temperature };
        })} />
      </Hidden>
    </Grid>
  )
}

export default Hourly;