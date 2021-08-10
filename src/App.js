import React from 'react';
import styled from 'styled-components';
import { ClockWrapper } from './view/Clock';

const AppContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <AppContainer>
      <ClockWrapper />
    </AppContainer>
  );
}

export default App;
