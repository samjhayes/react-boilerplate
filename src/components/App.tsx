import React, { Component, ReactNode } from 'react';

export interface HelloProps {
  target: string;
}

export class Hello extends Component<HelloProps, {}> {
  constructor(props: HelloProps) {
    super(props);
  }

  render(): ReactNode {
    return <h1>Hello, {this.props.target}!</h1>;
  }
}
