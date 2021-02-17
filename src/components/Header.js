import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Current from './Current';
import * as functions from '../utility/functions';

const useStyles = makeStyles(theme => ({
  headerText:{
    fontStyle: 'italic'
  }
}));

const Header = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  
  return (
    <Grid container direction={matchesXS? 'column' :'row'} style={{ borderTop: '2em', borderBottom: '1em'}}>
      <Grid item container direction='column' alignItems={matchesXS ? 'center': 'flex-end'} justify='center' sm>
        <Typography style={{fontSize:'2rem', fontWeight: 700}}>Cape Town</Typography>
        <Typography className={classes.headerText}>{functions.getDay(new Date(props.data.dt).getDay())}</Typography>
        <Typography className={classes.headerText} style={{opacity: 0.75}}>{props.data.weather[0].description}</Typography>
      </Grid>
      {/*Current component */}
      <Grid item container  justify='center' sm>
        <Current current={props.data}/>
      </Grid>
    </Grid>
  )
}

export default Header;