import React, { ReactNode } from 'react';
import { CDate } from '@kbwood/world-calendars';
import { DisplayOptions, NotifyDate } from './types';
import * as S from './Week.styles';

interface Props {
  curDate: CDate,
  daysInWeek: number,
  fromDate: CDate,
  maxDate?: CDate,
  minDate?: CDate,
  onSelect: NotifyDate,
  options: DisplayOptions,
}

const Week = ({ curDate, daysInWeek, fromDate, maxDate, minDate, onSelect, options }: Props) => {
  const selectDate = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLButtonElement;
    const [y, m, d] = target.value.split('-').map((v) => Number(v));
    onSelect(fromDate.date(y, m, d));
  };

  const calendar = curDate.calendar();
  const today = calendar.date();
  const localiseDigits = calendar.local.localiseDigits || ((value: string) => value);
  const days: ReactNode[] = [];
  let forDay = fromDate;
  for (let i = 0; i < daysInWeek; i += 1) {
    const date = `${forDay.year()}-${forDay.month()}-${forDay.day()}`;
    const dayLabel = localiseDigits(`${forDay.day()}`);
    const inThisMonth = forDay.month() === curDate.month();
    const isDisabled = (!!minDate && forDay.compareTo(minDate) === -1) ||
      (!!maxDate && forDay.compareTo(maxDate) === 1);
    const isSelected = forDay.compareTo(curDate) === 0;
    const isToday = forDay.compareTo(today) === 0;
    const isWeekend = !forDay.weekDay();
    if (options.showOtherMonth || inThisMonth) {
      if (options.selectOtherMonth || inThisMonth) {
        days.push(
          <S.DayCell key={date} inThisMonth={inThisMonth} selected={isSelected} today={isToday} weekend={isWeekend}>
            <S.DayButton disabled={isDisabled} onClick={selectDate} tabIndex={isSelected ? 0 : -1} type="button" value={date}>
              {dayLabel}
            </S.DayButton>
          </S.DayCell>
        );
      } else {
        days.push(
          <S.DayCell key={date} inThisMonth={inThisMonth} selected={isSelected} today={isToday} weekend={isWeekend}>
            <S.DayLabel>{dayLabel}</S.DayLabel>
          </S.DayCell>
        );
      }
    } else {
      days.push(<S.DayCell key={date} inThisMonth={inThisMonth} weekend={!forDay.weekDay()}>&nbsp;</S.DayCell>);
    }
    forDay = forDay.add(1, 'd');
  }

  return <tr key={`${fromDate.year()}-${fromDate.month()}-${fromDate.day()}`}>{days}</tr>;
};

export type { Props };
export default Week;
