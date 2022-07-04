import React, { FunctionComponent, ReactNode } from 'react';
import { CDate } from 'world-calendars';

interface Props {
  curDate: CDate;
  daysInWeek: number;
  fromDate: CDate;
  onSelect: (date: CDate) => void;
}

const DatepickerWeek: FunctionComponent<Props> = ({ curDate, daysInWeek, fromDate, onSelect }) => {
  const selectDate = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLButtonElement;
    const [y, m, d] = target.value.split('-').map((v) => Number(v));
    onSelect(fromDate.date(y, m, d));
  };
  const days: ReactNode[] = [];
  let forDay = fromDate;
  for (let i = 0; i < daysInWeek; i += 1) {
    const date = `${forDay.year()}-${forDay.month()}-${forDay.day()}`;
    days.push(
      <td key={date}>
        <button onClick={selectDate} type="button" value={date}>
          {forDay.day()}{curDate.compareTo(forDay) === 0 ? '*' : ''}
        </button>
      </td>
    );
    forDay = forDay.add(1, 'd');
  }

  return <tr key={`${fromDate.year()}-${fromDate.month()}-${fromDate.day()}`}>{days}</tr>;
};

export type { Props };
export default DatepickerWeek;
