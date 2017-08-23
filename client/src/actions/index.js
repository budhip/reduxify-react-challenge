export const getCurrentWeather = (weather) => {
  return {
    type: 'GET_WEATHER',
    payload: weather
  }
}

export const getForecasts = (weathers) => {
  return {
    type: 'GET_FORECASTS',
    payload: weathers
  }
}

export const findCityCurrent = (weather) => {
  return {
    type: 'FIND_CITY_CURRENT',
    payload: weather
  }
}

export const findCityForecasts = (weather) => {
  return {
    type: 'FIND_CITY_FORECASTS',
    payload: weather
  }
}
