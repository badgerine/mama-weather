import { Tooltip } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { useSelector } from 'react-redux';
import * as functions from '../utility/functions';
import TempVisual from './widgets/TempVisual';

const useStyles = makeStyles(theme => ({
  mainContainer: {
    justifyContent: 'center',
    marginTop: '2em',
    marginBottom: '2em',
    minWidth: '15em',
    backgroundColor: theme.palette.common.mamaGrey,
    borderRadius: '1em'
  },
  itemContainer: {
    padding: '1em',
    margin: '0.1em',
    borderRadius: '1em',
    backgroundColor: theme.palette.common.mamaYellow,
  },
  min: {
    [theme.breakpoints.down('xs')]:{
      paddingLeft: 0,
      align: 'center'
    },
    paddingLeft: '1.5em',
    opacity: '0.65',
    color: theme.palette.common.mamaBlue
  },
  max: {
    [theme.breakpoints.down('xs')]:{
      paddingRight: 0,
      align: 'center'
    },
    paddingRight: '1.5em',
    opacity: '0.65',
    color: theme.palette.common.mamaOrange
  }
}));

const Daily = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));
  const temperatureUnit = useSelector(state => state.temperatureUnit);
  return (
    <Grid item container direction='row' xs={12} sm={12} lg={10} className={classes.mainContainer}>
      {props.data.map(daily => {
        return (<React.Fragment key={daily.dt}>
          <Grid className={classes.itemContainer} item container direction='column' lg={1} md={3} sm={3} xs={6}>
            <Grid item >
              <Tooltip title={functions.offsetTime(functions.convertToMS(daily.dt))} aria-label='date'>
                <Typography align='center'>{functions.getDay(new Date(daily.dt * 1000).getDay())}</Typography>
              </Tooltip>
            </Grid>
            <Grid item align='center' style={{ opacity: 0.8 }}>
              <TempVisual weather={daily.weather} />
            </Grid>
            <Grid item container direction={matchesXS ? 'column' : 'row'}>
              <Grid item className={classes.min} sm>
                <Typography align='center'>{functions.displayTemp(daily.temp.min, temperatureUnit) + '\u00b0'}</Typography>
              </Grid>
              <Grid item className={classes.max} sm>
                <Typography align='center'>{functions.displayTemp(daily.temp.max, temperatureUnit) + '\u00b0'}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </React.Fragment>)
      })

      }
    </Grid >
  )
}

export default Daily;