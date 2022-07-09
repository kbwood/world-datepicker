import React, { ReactNode } from 'react';
import { CDate } from '@kbwood/world-calendars';
import * as S from './DatepickerHeader.styles';
import { NotifyDate } from './types';

interface Props {
  curDate: CDate;
  setCurDate: NotifyDate;
}

const generateYears = (year: number) => {
  const years: ReactNode[] = [];
  for (let y = year - 20; y <= year + 20; y++) {
    years.push(
      <option key={y} value={y}>
        {y}
      </option>
    );
  }
  return years;
};

const DatepickerHeader = ({ curDate, setCurDate }: Props) => {
  const cal = curDate.calendar();
  const year = curDate.year();
  const setMonth = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCurDate(curDate.set(Number(event.target.value), 'm'));
  };
  const setYear = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCurDate(curDate.set(Number(event.target.value), 'y'));
  };

  return (
    <div className="datepickerHeader">
      <S.Select aria-label="Select month" onChange={setMonth} value={curDate.month()}>
        {cal.local.monthNames.map((name, i) => (
          <option key={name} value={i + cal.minMonth}>
            {name}
          </option>
        ))}
      </S.Select>
      <S.Select aria-label="Select year" onChange={setYear} value={year}>
        {generateYears(year)}
      </S.Select>
    </div>
  );
};

export type { Props };
export default DatepickerHeader;
