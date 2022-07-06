import React, { useEffect, useState } from 'react';
import { CalendarBase, CDate } from 'world-calendars';
import DatepickerControls from './DatepickerControls';
import DatepickerMonth from './DatepickerMonth';
import { DisplayOptions, NotifyDate } from './types';

interface Props {
  calendar: CalendarBase
  date?: CDate
  onSelect?: NotifyDate
  options?: DisplayOptions
}

const Datepicker = ({ calendar, date, onSelect = () => {}, options = {} }: Props) => {
  const [curDate, setCurDate] = useState(date || calendar.date());
  useEffect(() => {
    setCurDate(date || calendar.date());
  }, [calendar, date]);

  if (!calendar) {
    return <div className="error">Missing calendar</div>;
  }

  return (
    <div className="datepicker">
      <DatepickerControls curDate={curDate} setCurDate={setCurDate} />
      <DatepickerMonth
        curDate={curDate}
        forDate={curDate}
        onSelect={onSelect}
        options={options}
        setCurDate={setCurDate}
      />
    </div>
  );
};

export type { Props };
export default Datepicker;
