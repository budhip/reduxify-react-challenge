import React, { Component } from 'react';
import { connect } from 'react-redux';

import MainForecast from './MainForecast';
import Header from './Header';
import { getCurrentWeather, getForecasts, findCityCurrent, findCityForecasts } from '../actions';

class ContentCuaca extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityInput: ''
    }
    this.gantiKota = this.gantiKota.bind(this);
    this.cariCuaca = this.cariCuaca.bind(this);
  }

  componentDidMount () {
    this.props.getWeather();
    this.props.getForecasts();
  }

  cariCuaca (e) {
    e.preventDefault();
    let kotaPilihan = this.state.cityInput;
    this.props.findCurrent(kotaPilihan);
    this.props.findForecasts(kotaPilihan);
    this.setState({
      cityInput: ''
    })
  }

  gantiKota (data) {
    this.setState({
      cityInput: data
    })
  }

  render = () => {
    const { currentWeather } = this.props;
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
    getWeather: () => dispatch(getCurrentWeather()),
    getForecasts: () => dispatch(getForecasts()),
    findCurrent: (kotaPilihan) => dispatch(findCityCurrent(kotaPilihan)),
    findForecasts: (kotaPilihan) => dispatch(findCityForecasts(kotaPilihan))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentCuaca);
