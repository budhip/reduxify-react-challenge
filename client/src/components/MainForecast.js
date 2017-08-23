import React, { Component } from 'react';
import { connect } from 'react-redux';

import ForecastItem from './ForecastItem';

class MainForecast extends Component{
  render = () => {
    return(
      <div>
        <h1>Perkiraan Selanjutnya</h1>
        <div className="row">
          {this.props.forecastWeathers.map((weather, index) => (
            (weather.dt_txt.includes("06:00:00")) ? <ForecastItem
            cuaca = {
              weather.weather[0].description
            }
            icon = {
              weather.weather[0].icon
            }
            tanggal = {
              new Date(weather.dt_txt).toDateString()
            }
            tanggalDT = {
              weather.dt
            }
            kelembaban = {
              weather.main.humidity
            }
            suhu = {
              Math.round(weather.main.temp - 273)
            }
            key = {
              index
            }
            /> : ''
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    forecastWeathers: state.weather.forecastWeathers
  }
}

export default connect(mapStateToProps, null) (MainForecast);
