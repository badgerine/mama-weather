import * as actionTypes from './actionTypes';
import * as constants from '../utility/constants';

const initalState = {
  temperatureUnit: constants.CELSIUS,
}

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.SET_CELSIUS: 
    return {
      ... state,
      temperatureUnit: constants.CELSIUS
    }
    case actionTypes.SET_FAHRENHEIT:
      return {
        ... state,
        temperatureUnit: constants.FAHRENHEIT
      }
    }
    return state;
}

export default reducer;