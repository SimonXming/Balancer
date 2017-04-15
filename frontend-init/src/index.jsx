/*import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './app.jsx';

render( <AppContainer><App/></AppContainer>, document.querySelector("#app"));

if (module && module.hot) {
  module.hot.accept('./app.jsx', () => {
    const App = require('./app.jsx').default;
    render(
      <AppContainer>
        <App/>
      </AppContainer>,
      document.querySelector("#app")
    );
  });
}*/

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router';

// import App from './app.jsx';
import App from './view/index.jsx';
import Error from './view/common/error'

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
  </Router>
, document.getElementById('app'));
