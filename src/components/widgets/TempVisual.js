import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Tooltip } from '@material-ui/core';

const TempVisual = (props) => {
  const { weather } = props;

  return (
    <Grid item >
      <Tooltip title={weather[0].description} aria-label='description'>
        <img style={{ height: '7em', width: '7em', borderRadius: '1em' }} src={`http://openweathermap.org/img/wn/${weather[0].icon}@4x.png`}
          alt="temperature icon" />
      </Tooltip>
    </Grid>
  )
}

export default TempVisual;