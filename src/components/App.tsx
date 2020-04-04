import React, { Component, ReactNode } from 'react';

import Identicon from '../assets/identicon.png';

export interface AppProps {
  target: string;
}

export class App extends Component<AppProps, {}> {
  constructor(props: AppProps) {
    super(props);
  }

  render(): ReactNode {
    return (
      <div>
        <img src={Identicon} />
        <h1>Hello, {this.props.target}!</h1>
      </div>
    );
  }
}
