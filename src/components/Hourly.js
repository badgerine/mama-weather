import React from 'react';
import {useSelector} from 'react-redux';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import BarGraph from './widgets/BarGraph';
import * as functions from '../utility/functions';

const useStyles = makeStyles( theme => ({

}));

const Hourly = (props) =>  {
  const classes = useStyles();
  const theme = useTheme();
  const temperatureUnit = useSelector(state => state.temperatureUnit);

  return (
    <Grid container direction='row' justify='center'>
      <BarGraph data={props.data.map(hourInfo => {
        let hours = (new Date(hourInfo.dt*1000)).getHours()+':00';
        const temperature = functions.displayTemp(hourInfo.temp, temperatureUnit);
          return {hours, temperature};
        })}/>
    </Grid>
  )
}

export default Hourly ;