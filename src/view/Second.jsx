import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ClockHands } from './ClockHands';
import { getNumber } from '../lib/getNumber';

const Second = styled(ClockHands)`
  font-size: 40px;
  color: ${props => props.color};
  opacity: ${props => props.opacity};
  transform: rotate(${props => props.secondDeg});
`;

export const SecondWrapper = ({ second, color }) => {
  const [secondString, setSecondString] = useState(getNumber(second));
  const [secondDeg, setSecondDeg] = useState((360 / 60) * second - 90);

  useEffect(() => {
    setSecondString(getNumber(second));
    setSecondDeg(secondDeg + 6);
    // eslint-disable-next-line
  }, [second]);

  const opacity = color === '#900' ? '1' : '0.8';

  return (
    <Second secondDeg={`${secondDeg}deg`} color={color} opacity={opacity}>
      {secondString}
    </Second>
  );
};
