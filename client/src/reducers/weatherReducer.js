const initialState = {
  currentWeather: {},
  forecastWeathers: []
}

export default (state=initialState, action) => {
  switch (action.type) {
    case 'GET_WEATHER':
      let newWeather = {
        kota: action.payload.name,
        kelembaban: action.payload.main.humidity,
        suhu: Math.round(action.payload.main.temp - 273),
        cuaca: action.payload.weather[0].description,
        icon: action.payload.weather[0].icon
      }
      return { ...state, currentWeather: newWeather }
    case 'GET_FORECASTS':
      return { ...state, forecastWeathers: action.payload }
    case 'FIND_CITY_CURRENT':
      let newCity = {
        kota: action.payload.name,
        kelembaban: action.payload.main.humidity,
        suhu: Math.round(action.payload.main.temp - 273),
        cuaca: action.payload.weather[0].description,
        icon: action.payload.weather[0].icon
      }
      return { ...state, currentWeather: newCity }
    case 'FIND_CITY_FORECASTS':
      return { ...state, forecastWeathers: action.payload }
    default:
  }
  return state
}
