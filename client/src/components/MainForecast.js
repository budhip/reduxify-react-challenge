import React, { Component } from 'react';
import ForecastItem from './ForecastItem';

class MainForecast extends Component{
  render = () => {
    return(
      <div>
        <h1>Perkiraan Minggu Ini</h1>
        <div className="row">
          {this.props.weatherList.map((weather, index) => (
            (weather.dt_txt.includes("06:00:00")) ? <ForecastItem
            cuaca = {
              weather.weather[0].description
            }
            icon = {
              weather.weather[0].icon
            }
            tanggal = {
              weather.dt_txt
            }
            tanggalDT = {
              weather.dt
            }
            kelembaban = {
              weather.main.humidity
            }
            suhu = {
              weather.main.temp
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

export default MainForecast;
