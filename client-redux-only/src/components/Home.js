import React, { Component } from 'react';
import Header from './Header';
// import bgimg from '../css/bg.png';

class Home extends Component {
  render = () => {
    return(
      <div>
      <Header />
        <div className="jumbotron jumbotron-fluid" style={{background: "aquamarine"}}>
          <div className="container">
            <h1 className="display-3">WeatherCute</h1>
            <p className="lead">Perkiraan Cuaca Yang Akurat, 99% tepat, dan Terpecaya</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
