import React, { ReactNode } from 'react';
import { CalendarBase, CDate } from '@kbwood/world-calendars';
import * as S from './Header.styles';
import { Localisation, NotifyDate, OptCDate } from './types';

interface Props {
  curDate: CDate,
  local: Localisation,
  maxDate?: CDate,
  minDate?: CDate,
  setCurDate: NotifyDate,
}

const generateMonths = (curDate: CDate, maxDate: OptCDate, minDate: OptCDate) => {
  const calendar = curDate.calendar();
  const year = curDate.year();
  const maxMonth = (!maxDate || maxDate.year() > year) ? calendar.monthsInYear(year) : maxDate.month();
  const minMonth = (!minDate || minDate.year() < year) ? calendar.minMonth : minDate.month();
  return calendar.local.monthNames.map((name, i) => {
    const index = i + calendar.minMonth;
    return index >= minMonth && index <= maxMonth && (
      <option key={name} value={i + calendar.minMonth}>
        {name}
      </option>
    );
  });
};

const generateYears = (year: number, calendar: CalendarBase, maxDate: OptCDate, minDate: OptCDate) => {
  const localiseDigits = calendar.local.localiseDigits || (value => value);
  const maxYear = maxDate ? maxDate.year() : Number.POSITIVE_INFINITY;
  const minYear = minDate ? minDate.year() : Number.NEGATIVE_INFINITY;
  const years: ReactNode[] = [];
  for (let y = year - 20; y <= year + 20; y++) {
    if (y >= minYear && y <= maxYear) {
      years.push(
        <option key={y} value={y}>
          {localiseDigits(`${y}`)}
        </option>
      );
    }
  }
  return years;
};

const Header = ({ curDate, local, maxDate, minDate, setCurDate }: Props) => {
  const year = curDate.year();
  const setMonth = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCurDate(curDate.set(Number(event.target.value), 'm'));
  };
  const setYear = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCurDate(curDate.set(Number(event.target.value), 'y'));
  };

  return (
    <>
      <S.Select aria-label={local.monthLabel} onChange={setMonth} value={curDate.month()}>
        {generateMonths(curDate, maxDate, minDate)}
      </S.Select>
      <S.Select aria-label={local.yearLabel} onChange={setYear} value={year}>
        {generateYears(year, curDate.calendar(), maxDate, minDate)}
      </S.Select>
    </>
  );
};

export type { Props };
export default Header;
