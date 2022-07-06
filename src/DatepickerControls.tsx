import React from 'react';
import { CDate } from 'world-calendars';
import { NotifyDate } from './types';

interface Props {
  curDate: CDate;
  setCurDate: NotifyDate;
}

const DatepickerControls = ({ curDate, setCurDate }: Props) => {
  const nextMonth = () => {
    setCurDate(curDate.add(1, 'm'));
  };
  const nextYear = () => {
    setCurDate(curDate.add(1, 'y'));
  };
  const prevMonth = () => {
    setCurDate(curDate.sub(1, 'm'));
  };
  const prevYear = () => {
    setCurDate(curDate.sub(1, 'y'));
  };
  const today = () => {
    setCurDate(curDate.calendar().date());
  };

  return (
    <div className="datepickerControls">
      <button onClick={prevYear} type="button">
        &lt;&lt;
      </button>
      <button onClick={prevMonth} type="button">
        &lt;
      </button>
      <button onClick={today} type="button">
        Today
      </button>
      <button onClick={nextMonth} type="button">
        &gt;
      </button>
      <button onClick={nextYear} type="button">
        &gt;&gt;
      </button>
    </div>
  );
};

export type { Props };
export default DatepickerControls;
