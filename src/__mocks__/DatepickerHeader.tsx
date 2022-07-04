import React, { FunctionComponent } from 'react';
import { Props } from '../DatepickerHeader';

const DatepickerHeader: FunctionComponent<Props> = ({ curDate }) => {
  const message = `Month header (current ${curDate.toString()})`;
  return <div>{message}</div>;
};

export default DatepickerHeader;
