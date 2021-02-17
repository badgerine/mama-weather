import React from 'react';
import Grid from '@material-ui/core/Grid';
import * as constants from '../../utility/constants';
import fairIcon from '../../assets/fair.svg';
import hotIcon from '../../assets/hot.svg';
import coldIcon from '../../assets/cold.svg';

const TempVisual = (props) => {
  const { temperature } = props;

  return (
    <Grid item >
      <img style={{ height: '7em', width: '7em', borderRadius: '1em' }} src={
        temperature > constants.HOT_THRESHOLD ? hotIcon :
          temperature < constants.COLD_THRESHOLD ? coldIcon :
            fairIcon
      }
        alt="temperature icon" />
    </Grid>
  )
}

export default TempVisual;