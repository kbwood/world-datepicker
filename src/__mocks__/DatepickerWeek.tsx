import React, { FunctionComponent } from 'react';
import { Props } from '../DatepickerWeek';

const DatepickerWeek: FunctionComponent<Props> = ({ curDate, daysInWeek, fromDate }) => {
  const message = `Week from ${fromDate.toString()} - ${daysInWeek} days (current ${curDate.toString()})`;
  return <tr key={fromDate.toString()}><td>{message}</td></tr>;
};

export default DatepickerWeek;
