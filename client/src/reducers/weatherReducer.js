const initialState = {
  currentWeather: {},
  forecastWeather: []
}

export default (state=initialState, action) => {
  switch (action.type) {
    case 'GET_WEATHER':
        return { ...state, currentWeather: action.payload }
    default:
  }
  return state
}
