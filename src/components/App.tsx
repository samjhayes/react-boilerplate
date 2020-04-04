import React, { Component, ReactNode } from 'react';
import styled from 'styled-components';

import Identicon from '../assets/identicon.png';

export interface AppProps {
  target: string;
}

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #8cd8b3;
  padding: 2rem;
`;

export const StyledHeading = styled.h1`
  font-size: 5rem;
  margin: 3rem 0 0;
  color: white;
`;

export class App extends Component<AppProps, {}> {
  constructor(props: AppProps) {
    super(props);
  }

  render(): ReactNode {
    return (
      <StyledWrapper>
        <img src={Identicon} />
        <StyledHeading>Hello, {this.props.target}!</StyledHeading>
      </StyledWrapper>
    );
  }
}
