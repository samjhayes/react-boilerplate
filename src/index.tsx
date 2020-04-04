import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './components/App';
import { GlobalStyle } from './globalStyle';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App target="world" />
  </React.StrictMode>,
  document.getElementById('root')
);
