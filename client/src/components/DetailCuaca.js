import React, { Component } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';

class DetailCuaca extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tanggalId: props.match.params.tanggalDT,
      kelembaban: props.location.state.kelembaban,
      cuaca: props.location.state.cuaca,
      tanggal: props.location.state.tanggal,
      suhu: props.location.state.suhu,
      icon: props.location.state.icon
    }
  }

  componentWillMount () {
    this.setState({
      tanggal: new Date(this.state.tanggal).toDateString(),
      suhu: Math.round(this.state.suhu - 273),
      icon: 'http://openweathermap.org/img/w/' +this.state.icon+ '.png'
    })
  }

  render = () => {
    return(
      <div>
        <Header />
        <div className="row">
          <div className="col-sm-4 col-md-4">
            <div className="card border-success mb-3" style={{width: '20rem'}}>
              <div className="card-header bg-warning border-success">{this.state.tanggal}</div>
                <div className="card-body text-success">
                  <p className="card-text">Kelembaban : {this.state.kelembaban} %</p>
                  <p className="card-text">Temperatur : {this.state.suhu} ℃</p>
                  <p className="card-text">Awan: <img src={this.state.icon} alt="" /> {this.state.cuaca}</p>
                </div>
              <Link to={{
                pathname: `/PerkiraanCuaca`,
              }}>
              <div className="card-footer border-success">Back</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailCuaca
