import React, { ReactNode } from 'react';
import { CDate } from 'world-calendars';
import { DisplayOptions, NotifyDate } from './types';

interface Props {
  curDate: CDate;
  daysInWeek: number;
  fromDate: CDate;
  onSelect: NotifyDate;
  options: DisplayOptions;
}

const DatepickerWeek = ({ curDate, daysInWeek, fromDate, onSelect, options }: Props) => {
  const selectDate = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLButtonElement;
    const [y, m, d] = target.value.split('-').map((v) => Number(v));
    onSelect(fromDate.date(y, m, d));
  };

  const days: ReactNode[] = [];
  let forDay = fromDate;
  for (let i = 0; i < daysInWeek; i += 1) {
    const date = `${forDay.year()}-${forDay.month()}-${forDay.day()}`;
    const inThisMonth = forDay.month() === curDate.month();
    if (options.showOtherMonth || inThisMonth) {
      if (options.selectOtherMonth || inThisMonth) {
        days.push(
          <td key={date}>
            <button onClick={selectDate} type="button" value={date}>
              {forDay.day()}{curDate.compareTo(forDay) === 0 ? '*' : ''}
            </button>
          </td>
        );
      } else {
        days.push(<td key={date}>{forDay.day()}</td>);
      }
    } else {
      days.push(<td key={date}>&nbsp;</td>);
    }
    forDay = forDay.add(1, 'd');
  }

  return <tr key={`${fromDate.year()}-${fromDate.month()}-${fromDate.day()}`}>{days}</tr>;
};

export type { Props };
export default DatepickerWeek;
