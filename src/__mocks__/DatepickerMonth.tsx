import React, { FunctionComponent } from 'react';
import { Props } from '../DatepickerMonth';

const DatepickerMonth: FunctionComponent<Props> = ({ curDate, forDate }) => {
  const message = `Month for ${forDate.toString()} (current ${curDate.toString()})`;
  return <div>{message}</div>;
};

export default DatepickerMonth;
