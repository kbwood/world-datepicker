import React, { ReactNode } from 'react';
import { CDate } from 'world-calendars';
import { DisplayOptions, NotifyDate } from './types';
import * as S from './DatepickerWeek.styles';

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

  const today = curDate.calendar().date();
  const days: ReactNode[] = [];
  let forDay = fromDate;
  for (let i = 0; i < daysInWeek; i += 1) {
    const date = `${forDay.year()}-${forDay.month()}-${forDay.day()}`;
    const inThisMonth = forDay.month() === curDate.month();
    if (options.showOtherMonth || inThisMonth) {
      if (options.selectOtherMonth || inThisMonth) {
        days.push(
          <S.DayCell key={date} inThisMonth={inThisMonth} selected={forDay.compareTo(curDate) === 0} today={forDay.compareTo(today) === 0} weekend={!forDay.weekDay()}>
            <S.DayButton onClick={selectDate} type="button" value={date}>
              {forDay.day()}
            </S.DayButton>
          </S.DayCell>
        );
      } else {
        days.push(
          <S.DayCell key={date} inThisMonth={inThisMonth} selected={forDay.compareTo(curDate) === 0} today={forDay.compareTo(today) === 0} weekend={!forDay.weekDay()}>
            <S.DayLabel>{forDay.day()}</S.DayLabel>
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
export default DatepickerWeek;
