import React from 'react';
import { Props } from '../Month';

const Month = ({ curDate, forDate }: Props) => {
  const message = `Month for ${forDate.toString()} (current ${curDate.toString()})`;
  return <div>{message}</div>;
};

export default Month;
