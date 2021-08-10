import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ClockHands } from './ClockHands';
import { getNumber } from '../lib/getNumber';

const Minute = styled(ClockHands)`
  font-size: 60px;
  color: ${props => props.color};
  opacity: ${props => props.opacity};
  transform: rotate(${props => props.minuteDeg});
`;

export const MinuteWrapper = ({ minute, color }) => {
  const [minuteString, setMinuteString] = useState(getNumber(minute));
  const [minuteDeg, setMinuteDeg] = useState((360 / 60) * minute - 90);

  useEffect(() => {
    setMinuteString(getNumber(minute));
    setMinuteDeg(minuteDeg + 6);
    // eslint-disable-next-line
  }, [minute]);

  const opacity = color === '#900' ? '0.8' : '0.6';

  return (
    <Minute minuteDeg={`${minuteDeg}deg`} color={color} opacity={opacity}>
      {minuteString}
    </Minute>
  );
};
