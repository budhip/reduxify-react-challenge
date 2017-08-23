export const getCurrentWeather = (weather) => {
  return {
    type: 'GET_WEATHER',
    payload: weather
  }
}
