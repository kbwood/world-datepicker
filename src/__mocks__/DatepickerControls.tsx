import React, { FunctionComponent } from 'react';
import { Props } from '../DatepickerControls';

const DatepickerControls: FunctionComponent<Props> = ({ curDate }) => {
  const message = `Controls (current ${curDate.toString()})`;
  return <div>{message}</div>;
};

export default DatepickerControls;
