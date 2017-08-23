import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Home from './components/Home';
import ContentCuaca from './components/ContentCuaca';
import DetailCuaca from './components/DetailCuaca';
import './css/style.css';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store= {store}>
        <BrowserRouter>
          <div>
            <Route exact path='/' component={Home} />
            <Route path='/PerkiraanCuaca' component={ContentCuaca} />
            <Route path='/weather/:id' component={DetailCuaca} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
