import * as constants from './constants';

const convertToFahrenheit = (tempInCelsius) =>{
  return tempInCelsius*9/5 +32;
}

export const displayTemp = (temp, metric) => (
  Math.round(metric === constants.FAHRENHEIT ? convertToFahrenheit(temp) : temp)
);

export const getDay = (number) => (['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'][number])