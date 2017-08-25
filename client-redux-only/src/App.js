import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import ContentCuaca from './components/ContentCuaca';
import DetailCuaca from './components/DetailCuaca';
import './css/style.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/' component={Home} />
          <Route path='/PerkiraanCuaca' component={ContentCuaca} />
          <Route path='/weather/:id' component={DetailCuaca} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
