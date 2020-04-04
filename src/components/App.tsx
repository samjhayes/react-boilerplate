import React, { Component, ReactNode } from 'react';
import styled from 'styled-components';

export interface AppProps {
  target: string;
}

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: mediumslateblue;
  padding: 2rem;
`;

export const StyledHeading = styled.h1`
  font-size: 3rem;
  margin: 0;
  color: orange;
`;

export class App extends Component<AppProps, {}> {
  constructor(props: AppProps) {
    super(props);
  }

  render(): ReactNode {
    return (
      <StyledWrapper>
        <StyledHeading>Hello, {this.props.target}!</StyledHeading>
      </StyledWrapper>
    );
  }
}
