import React from 'react';
import { Props } from '../Week';

const Week = ({ curDate, daysInWeek, fromDate }: Props) => {
  const message = `Week from ${fromDate.toString()} - ${daysInWeek} days (current ${curDate.toString()})`;
  return <tr key={fromDate.toString()}><td>{message}</td></tr>;
};

export default Week;
