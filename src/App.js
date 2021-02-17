import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Header from './components/Header';
import Daily from './components/Daily';
import Hourly from './components/Hourly';
import axios from 'axios';
import axiosRetry from 'axios-retry';
import Spinner from './components/widgets/Spinner/Spinner';
import { ThemeProvider, Typography } from '@material-ui/core';
import Theme from './theme/Theme';

const App = (props) => {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [currentData, setCurrentData] = useState(null);
  const [dailyData, setDailyData] = useState(null);
  const [hourlyData, setHourlyData] = useState(null);

  const axiosConfig = {
    url: process.env.REACT_APP_SERVICE_PARAM_URL,
    method: 'get',
  }

  const retrieveWeatherData = () => {
    axiosRetry(axios, { retryDelay: axiosRetry.exponentialDelay });

    axios.request(axiosConfig)
      .then(res => {
        const weatherData = res.data;
        let jsonObject = null;
        try{
          jsonObject = JSON.parse(weatherData);
          setAppData(jsonObject);
        } catch(e){
          console.error('[App.js] response.data is not JSON',weatherData);
        }
        setAppData(weatherData)
      })
      .catch(err => {
        console.log('error=', err);
      });
  }

  const setAppData = (weatherData) => {
    if (weatherData) {
      // console.log('[App.setAppData]weatherData=',weatherData)
      setCurrentData(weatherData['current']);
      setDailyData(weatherData['daily']);
      setHourlyData(weatherData['hourly']);
    }
  }

  useEffect(() => {
    if (currentData && dailyData && hourlyData) {
      setDataLoaded(true);
      // console.log('[App.useEffect]currentData=',currentData);
      // console.log('[App.useEffect]dailyData=',dailyData);
      // console.log('[App.useEffect]hourlyData=',hourlyData);
    }
  }, [currentData, dailyData, hourlyData])

  useEffect(() => {
    const dataRefresh = setInterval(() => {
      retrieveWeatherData();
    }, process.env.REACT_APP_SERVICE_REFRESH_MINS * 60 * 1000);
    return () => {
      clearInterval(dataRefresh)
    }
  }, [])

  useEffect(() => {
    retrieveWeatherData();
  }, [])

  const homePage = dataLoaded ? (
    <Grid container direction='column' align='center' alignItems='center'>
      <Header data={currentData} />
      <Daily data={dailyData} />
      <Hourly data={hourlyData} />
    </Grid>
  ) : (
      <Grid container direction='column' alignItems='center'>
        <Typography variant='h3'>Cape Town Weather</Typography>
        <Typography>Awaiting weather data ...</Typography>
        <Spinner />

      </Grid>

    );

  return (
    <ThemeProvider theme={Theme}>
      <React.Fragment>
        {homePage}
      </React.Fragment>
    </ThemeProvider>
  )
}

export default App;