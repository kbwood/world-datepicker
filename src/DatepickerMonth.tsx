import React, { FunctionComponent, ReactNode } from 'react';
import { CalendarBase, CDate } from 'world-calendars';
import DatepickerHeader from './DatepickerHeader';
import DatepickerWeek from './DatepickerWeek';

interface Props {
  curDate: CDate;
  forDate: CDate;
  onSelect: (date: CDate) => void;
  setCurDate: (date: CDate) => void;
}

const generateDays = (
  cal: CalendarBase
) => {
  const daysInWeek = cal.daysInWeek();
  const days: ReactNode[] = [];
  for (let i = 0; i < daysInWeek; i++) {
    const name = cal.local.dayNamesMin[(i + cal.local.firstDay) % daysInWeek];
    days.push(<th key={name}>{name}</th>);
  }
  return days;
};

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

const DatepickerMonth: FunctionComponent<Props> = ({ curDate, forDate, onSelect, setCurDate }) => {
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
      <thead>
        <tr>
          <th colSpan={daysInWeek}>
            <DatepickerHeader curDate={curDate} setCurDate={setCurDate} />
          </th>
        </tr>
        <tr>
          {generateDays(cal)}
        </tr>
      </thead>
      <tbody>
        {generateWeeks(monthStart, weekCount, daysInWeek, curDate, onSelect)}
      </tbody>
    </table>
  );
};

export type { Props };
export default DatepickerMonth;
