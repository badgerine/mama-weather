import * as constants from './constants';

const convertToFahrenheit = (tempInCelsius) =>{
  return tempInCelsius*9/5 +32;
}

export const displayTemp = (temp, metric) => (
  Math.round(metric === constants.FAHRENHEIT ? convertToFahrenheit(temp) : temp)
);

export const convertToMS = (sinceEpoch) => {
  return sinceEpoch *1000;
}

export const offsetTime = (sinceEpochMS) => {
  return new Date(sinceEpochMS).toLocaleString('en-ZA');// + constants.TIME_OFFSET_MS);
}

export const getDay = (number) => (['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][number])