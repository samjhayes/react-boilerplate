import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './components/App';

ReactDOM.render(
  <React.Fragment>
    <App target="world" />
  </React.Fragment>,
  document.getElementById('root'),
);
