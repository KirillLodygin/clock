import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ClockHands } from './ClockHands';
import { getNumber } from '../lib/getNumber';

const Hour = styled(ClockHands)`
  font-size: 80px;
  color: ${props => props.color};
  opacity: ${props => props.opacity};
  transform: rotate(${props => props.hourDeg});
`;

export const HourWrapper = ({ hour, color }) => {
  const [hourString, setHourString] = useState(getNumber(hour));
  const [hourDeg, setHourDeg] = useState((360 / 12) * hour - 90);

  useEffect(() => {
    setHourString(getNumber(hour));
    setHourDeg(hourDeg + 30);
    // eslint-disable-next-line
  }, [hour]);

  const opacity = color === '#900' ? '0.6' : '0.4';

  return (
    <Hour hourDeg={`${hourDeg}deg`} color={color} opacity={opacity}>
      {hourString}
    </Hour>
  );
};
