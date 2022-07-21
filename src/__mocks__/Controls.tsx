import React from 'react';
import { Props } from '../Controls';

const Controls = ({ curDate }: Props) => {
  const message = `Controls (current ${curDate.toString()})`;
  return <div>{message}</div>;
};

export default Controls;
