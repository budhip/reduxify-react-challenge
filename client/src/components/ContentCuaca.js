import React, { Component } from 'react';
import axios from 'axios';
import MainForecast from './MainForecast';
import Header from './Header';

class ContentCuaca extends Component {
  constructor() {
    super();
    this.state = {
      kota: '',
      kelembaban: '',
      suhu: '',
      cuaca: '',
      icon: '',
      weatherList: [],
      cityInput: ''
    }

    this.getWeather = this.getWeather.bind(this)
    this.gantiKota = this.gantiKota.bind(this)
    this.cariCuaca = this.cariCuaca.bind(this)
  }

  getWeather (data) {
    this.setState({
      kota: data.name,
      kelembaban: data.main.humidity,
      suhu: Math.round(data.main.temp - 273),
      cuaca: data.weather[0].description,
      icon: data.weather[0].icon
    })
  }

  componentDidMount () {
    axios.get('http://api.openweathermap.org/data/2.5/weather?q=Jakarta&APPID=80acb29daded6e808231e31fb1c6666b')
    .then(response => {
      console.log(response.data);
      this.getWeather(response.data)
    })
    .catch(err => console.log(err))
    axios.get('http://api.openweathermap.org/data/2.5/forecast?q=Jakarta&APPID=80acb29daded6e808231e31fb1c6666b')
    .then(response => {
      this.setState({
        weatherList: response.data.list
      })
    })
    .catch(err => console.log(err))
  }

  cariCuaca (e) {
    e.preventDefault()
    let kotaPilihan = this.state.cityInput
    axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + kotaPilihan + '&APPID=80acb29daded6e808231e31fb1c6666b')
    .then(response => {
      this.getWeather(response.data)
      this.setState({
        cityInput: ''
      })
    })
    .catch(err => console.log(err))
    axios.get('http://api.openweathermap.org/data/2.5/forecast?q=' + kotaPilihan + '&APPID=80acb29daded6e808231e31fb1c6666b')
    .then(response => {
      this.setState({
        weatherList: response.data.list
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
    let displayIcon = 'http://openweathermap.org/img/w/' +this.state.icon+ '.png';
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
          <div className="card-header bg-warning border-success">{this.state.kota}</div>
          <div className="card-body text-success">
            <p className="card-text">Kelembaban : {this.state.kelembaban} %</p>
            <p className="card-text">Temperatur : {this.state.suhu} ℃</p>
            <p className="card-text">Awan: <img src={displayIcon} alt="" />{this.state.cuaca}</p>
          </div>
          <div className="card-footer border-success">Sumber: OpenWeatherMap</div>
        </div>
        <hr />
        <MainForecast weatherList={this.state.weatherList}/>
      </div>
    );
  }
}

export default ContentCuaca;
