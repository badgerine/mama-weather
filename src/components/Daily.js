import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
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
    backgroundColor: theme.palette.common.mamaGrey,
  },
  itemContainer: {
    borderRadius: '1em',
  },
  min: {
    paddingLeft: '1.5em',
    opacity: '0.65',
    color: theme.palette.common.mamaBlue
  },
  max: {
    paddingRight: '1.5em',
    opacity: '0.65',
    color: theme.palette.common.mamaOrange
  }
}));

const Daily = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const temperatureUnit = useSelector(state => state.temperatureUnit);
  return (
    <Grid item container direction='row' xs={8} lg={12} className={classes.mainContainer}>
      {props.data.map(daily => {
        return (<React.Fragment key={daily.dt}>
          <Grid className={classes.itemContainer} item container direction='column' lg={1} md={3} sm={3} xs={6}>
            <Grid item >
              <Typography align='center'>{functions.getDay(new Date(daily.dt * 1000).getDay())}</Typography>
            </Grid>
            <Grid item align='center' style={{ opacity: 0.8 }}>
              <TempVisual temperature={daily.temp.max} />
            </Grid>
            <Grid item container>
              <Grid item className={classes.min} xs>
                <Typography align='center'>{functions.displayTemp(daily.temp.min, temperatureUnit)+'\u00b0'}</Typography>
              </Grid>
              <Grid item className={classes.max} xs>
                <Typography align='center'>{functions.displayTemp(daily.temp.max, temperatureUnit)+'\u00b0'}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </React.Fragment>)
      })

      }
    </Grid>
  )
}

export default Daily;