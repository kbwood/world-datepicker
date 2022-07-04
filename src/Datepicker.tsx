import React, { FunctionComponent, useEffect, useState } from 'react';
import { CalendarBase, CDate } from 'world-calendars';
import DatepickerControls from './DatepickerControls';
import DatepickerHeader from './DatepickerHeader';
import DatepickerMonth from './DatepickerMonth';

interface Props {
  calendar: CalendarBase;
  date?: CDate;
  onSelect?: (date: CDate) => void;
}

const Datepicker: FunctionComponent<Props> = ({ calendar, date, onSelect = () => {} }) => {
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
      <DatepickerHeader curDate={curDate} setCurDate={setCurDate} />
      <DatepickerMonth
        curDate={curDate}
        forDate={curDate}
        onSelect={onSelect}
      />
    </div>
  );
};

export type { Props };
export default Datepicker;
