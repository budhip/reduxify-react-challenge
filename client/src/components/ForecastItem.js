import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ForecastItem extends Component {
  render = () => {
    let displayIcon = 'http://openweathermap.org/img/w/' +this.props.icon+ '.png';
    return(
        <div className="col-sm-4 col-md-4">
          <div className="card border-success mb-3" style={{width: '20rem'}}>
            <div className="card-header bg-warning border-success"><img src={displayIcon} alt="" />{this.props.tanggal}</div>
            <Link to={{
              pathname: `/weather/${this.props.tanggalDT}`,
              state: { kelembaban: this.props.kelembaban,
                       cuaca: this.props.cuaca,
                       tanggal: this.props.tanggal,
                       suhu: this.props.suhu,
                       icon: this.props.icon
                     }
            }}>
            <div className="card-footer border-success">Detail</div>
            </Link>
          </div>
        </div>
    );
  }
}

export default ForecastItem
