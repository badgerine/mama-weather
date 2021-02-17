import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import TempVisual from './widgets/TempVisual';
import * as functions from '../utility/functions';
import * as constants from '../utility/constants';
import * as actions from '../store/action';

const useStyles = makeStyles(theme => ({

}));

const Current = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  const [currentTemp, setCurrentTemp] = useState(null);

  //global state
  const temperatureUnit = useSelector(state => state.temperatureUnit);
  const dispatch = useDispatch();
  const onToggleCelsius = useCallback(() => dispatch(actions.setCelsius()), [dispatch]);
  const onToggleFahrenheit = useCallback(() => dispatch(actions.setFahrenheit()), [dispatch]);

  
  useEffect(() => {
    // console.log('[Current]useEffect{1} current=',props.current);
    setCurrentTemp(props.current.temp)
  },[props])

  
  useEffect(() => {
    if (currentTemp && currentTemp >= constants.COLD_THRESHOLD && props.current.temp < constants.COLD_THRESHOLD) {
      alert('Its turning to ice... ', currentTemp, 'to', props.current.temp);
    } else if (currentTemp && currentTemp <= constants.HOT_THRESHOLD && props.current.temp > constants.HOT_THRESHOLD) {
      alert('Its heating up... ', currentTemp, 'to', props.current.temp);
    }
    console.log('[Current]useEffect{2} [alerting] props.current.temp=',props.current.temp,'currentTemp=',currentTemp);
    setCurrentTemp(props.current.temp);
  }, [props,currentTemp])

  useEffect(()=> {
    // console.log('[Current]useEffect{3} current=',props.current);
  },[onToggleFahrenheit,onToggleCelsius])

  const handleRadioChange = (event) => {
    event.target.value == constants.FAHRENHEIT ? onToggleFahrenheit() : onToggleCelsius();
  }

  return (
    <Grid container direction='row' justify={matchesXS ? 'center' : undefined} >
      <Grid item>
        <TempVisual temperature={props.current.temp} />
      </Grid>
      <Grid item >
        <Typography style={{ alignSelf: 'center', fontSize: '3rem' }}>{functions.displayTemp(currentTemp, temperatureUnit)}</Typography>
      </Grid>
      <Grid item>
        <RadioGroup aria-label="Unit" name="degrees" value={temperatureUnit} onChange={handleRadioChange}>
          <FormControlLabel value={constants.CELSIUS} control={<Radio style={{ color: '#ffa500' }} />} label={'\u00b0 C'} />
          <FormControlLabel value={constants.FAHRENHEIT} control={<Radio style={{ color: '#ffa500' }} />} label={'\u00b0 F'} color='#ffa500' />
        </RadioGroup>
      </Grid>
    </Grid>
  )
}

export default Current;