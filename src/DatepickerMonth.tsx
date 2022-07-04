import React, { FunctionComponent, ReactNode } from 'react';
import { CDate } from 'world-calendars';
import DatepickerWeek from './DatepickerWeek';

interface Props {
  curDate: CDate;
  forDate: CDate;
  onSelect: (date: CDate) => void;
}

const generateWeeks = (
  fromDate: CDate,
  weekCount: number,
  daysInWeek: number,
  curDate: CDate,
  onSelect: (date: CDate) => void
) => {
  const weeks: ReactNode[] = [];
  let forDate = fromDate;
  for (let i = 0; i < weekCount; i++) {
    weeks.push(
      <DatepickerWeek
        key={forDate.toString()}
        curDate={curDate}
        fromDate={forDate}
        daysInWeek={daysInWeek}
        onSelect={onSelect}
      />
    );
    forDate = forDate.add(1, 'w');
  }
  return weeks;
};

const DatepickerMonth: FunctionComponent<Props> = ({ curDate, forDate, onSelect }) => {
  const cal = forDate.calendar();
  const daysInWeek = cal.daysInWeek();
  const monthFirst = forDate.set(cal.minDay, 'd');
  const monthCalc = monthFirst
    .sub(monthFirst.dayOfWeek(), 'd')
    .add(cal.local.firstDay, 'd');
  const monthStart =
    monthCalc.month() === forDate.month() && monthCalc.day() > cal.minDay ? monthCalc.sub(1, 'w') : monthCalc;
  const monthLast = monthFirst.add(1, 'm').sub(1, 'd');
  const weekCount = Math.ceil(
    (monthLast.toJD() - monthStart.toJD() + 1) / daysInWeek
  );

  return (
    <table className="datepickerMonth">
      <tbody>
        {generateWeeks(monthStart, weekCount, daysInWeek, curDate, onSelect)}
      </tbody>
    </table>
  );
};

export type { Props };
export default DatepickerMonth;
