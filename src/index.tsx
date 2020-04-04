import React from 'react';
import ReactDOM from 'react-dom';
import { Global } from '@emotion/core';

import { GlobalStyles } from './GlobalStyles';
import { App } from './components/App';

ReactDOM.render(
  <React.Fragment>
    <Global styles={GlobalStyles} />
    <App target="world" />
  </React.Fragment>,
  document.getElementById('root'),
);
