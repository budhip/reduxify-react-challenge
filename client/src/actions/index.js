import axios from 'axios';

export const getCurrentWeather = () => {
  return dispatch => {
    axios.get('http://api.openweathermap.org/data/2.5/weather?q=Jakarta&APPID=80acb29daded6e808231e31fb1c6666b')
    .then(response => {
      dispatch({
        type: 'GET_WEATHER',
        payload: response.data
      })
    })
    .catch(err => console.log(err))
  }
}

export const getForecasts = () => {
  return dispatch => {
    axios.get('http://api.openweathermap.org/data/2.5/forecast?q=Jakarta&APPID=80acb29daded6e808231e31fb1c6666b')
    .then(response => {
      dispatch({
        type: 'GET_FORECASTS',
        payload: response.data.list
      })
    })
    .catch(err => console.log(err))
  }
}

export const findCityCurrent = (kotaPilihan) => {
  return dispatch => {
    axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + kotaPilihan + '&APPID=80acb29daded6e808231e31fb1c6666b')
    .then(response => {
      dispatch({
        type: 'FIND_CITY_CURRENT',
        payload: response.data
      })
    })
    .catch(err => console.log(err))
  }
}

export const findCityForecasts = (kotaPilihan) => {
  return dispatch => {
    axios.get('http://api.openweathermap.org/data/2.5/forecast?q=' + kotaPilihan + '&APPID=80acb29daded6e808231e31fb1c6666b')
    .then(response => {
      dispatch({
        type: 'FIND_CITY_FORECASTS',
        payload: response.data.list
      })
    })
    .catch(err => console.log(err))
  }
}
