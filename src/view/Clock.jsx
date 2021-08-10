import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { HourWrapper } from './Hour';
import { MinuteWrapper } from './Minute';
import { SecondWrapper } from './Second';

const ClockFrame = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${props => props.background};
`;

const Clock = styled.div`
  position: relative;
  left: 50%;
  top: 40%;
  height: 220px;
`;

export const ClockWrapper = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => setDate(new Date()), 1000);
  });

  const color = date.getHours() < 12 ? '#900' : 'whitesmoke';

  return (
    <ClockFrame background={date.getHours() < 12 ? 'whitesmoke' : '#900'}>
      <Clock>
        <HourWrapper hour={date.getHours() % 12} color={color} />
        <MinuteWrapper minute={date.getMinutes()} color={color} />
        <SecondWrapper second={date.getSeconds()} color={color} />
      </Clock>
    </ClockFrame>
  );
};
