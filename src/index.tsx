import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './components/App';
import { GlobalStyle } from './globalStyle';

ReactDOM.render(
  <React.Fragment>
    <GlobalStyle />
    <App target="world" />
  </React.Fragment>,
  document.getElementById('root')
);
