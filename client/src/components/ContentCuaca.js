import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import MainForecast from './MainForecast';
import Header from './Header';
import { getCurrentWeather, getForecasts, findCityCurrent, findCityForecasts } from '../actions'

class ContentCuaca extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityInput: ''
    }

    this.gantiKota = this.gantiKota.bind(this)
    this.cariCuaca = this.cariCuaca.bind(this)
  }

  componentDidMount () {
    axios.get('http://api.openweathermap.org/data/2.5/weather?q=Jakarta&APPID=80acb29daded6e808231e31fb1c6666b')
    .then(response => {
      console.log(response.data);
      this.props.getWeather(response.data)
    })
    .catch(err => console.log(err))
    axios.get('http://api.openweathermap.org/data/2.5/forecast?q=Jakarta&APPID=80acb29daded6e808231e31fb1c6666b')
    .then(response => {
      this.props.getForecasts(response.data.list)
    })
    .catch(err => console.log(err))
  }

  cariCuaca (e) {
    e.preventDefault()
    let kotaPilihan = this.state.cityInput
    axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + kotaPilihan + '&APPID=80acb29daded6e808231e31fb1c6666b')
    .then(response => {
      this.props.findCurrent(response.data)
    })
    .catch(err => console.log(err))
    axios.get('http://api.openweathermap.org/data/2.5/forecast?q=' + kotaPilihan + '&APPID=80acb29daded6e808231e31fb1c6666b')
    .then(response => {
      this.props.findForecasts(response.data.list)
      this.setState({
        cityInput: ''
      })
    })
    .catch(err => console.log(err))
  }

  gantiKota (data) {
    this.setState({
      cityInput: data
    })
  }

  render = () => {
    const { currentWeather } = this.props
    let displayIcon = 'http://openweathermap.org/img/w/' +currentWeather.icon+ '.png';
    return(
      <div>
        <Header />
        <div className="rows">
          <div className="col-md-4">
            <form onSubmit={this.cariCuaca}>
              <label className="label">Nama Kota:</label>&nbsp;
                <input className="input" type="text" placeholder="--Nama kota--" onChange={(e) => this.gantiKota(e.target.value)} value={this.state.cityInput}/>
            </form>
          </div>
        </div>
        <h1 className=""> Cuaca hari ini </h1>
        <div className="card border-success mb-3" style={{width: '20rem'}}>
          <div className="card-header bg-warning border-success">{currentWeather.kota}</div>
          <div className="card-body text-success">
            <p className="card-text">Kelembaban : {currentWeather.kelembaban} %</p>
            <p className="card-text">Temperatur : {currentWeather.suhu} ℃</p>
            <p className="card-text">Awan: <img src={displayIcon} alt="" />{currentWeather.cuaca}</p>
          </div>
          <div className="card-footer border-success">Sumber: OpenWeatherMap</div>
        </div>
        <hr />
        <MainForecast />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentWeather: state.weather.currentWeather
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getWeather: (weather) => dispatch(getCurrentWeather(weather)),
    getForecasts: (weathers) => dispatch(getForecasts(weathers)),
    findCurrent: (weather) => dispatch(findCityCurrent(weather)),
    findForecasts: (weathers) => dispatch(findCityForecasts(weathers))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentCuaca);
