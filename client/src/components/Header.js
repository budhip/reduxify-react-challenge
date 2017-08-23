import React, { Component } from 'react';
import Logo from '../assets/logobrand.png';
import { Link } from 'react-router-dom';


class Header extends Component {
  render = () => {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <navbar-brand>
            <img src={Logo} width="40px" alt="" />
          </navbar-brand>
          <span className="navbar-brand">WeatherCute</span>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/">
                  <span className="nav-link active">Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/PerkiraanCuaca">
                  <span className="nav-link active">Perkiraan Cuaca</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
