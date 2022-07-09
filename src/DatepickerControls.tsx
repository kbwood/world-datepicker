import React from 'react';
import { CDate } from '@kbwood/world-calendars';
import * as S from './DatepickerControls.styles';
import { NotifyDate } from './types';

interface Props {
  curDate: CDate;
  setCurDate: NotifyDate;
}

const DatepickerControls = ({ curDate, setCurDate }: Props) => {
  const nextMonth = () => {
    setCurDate(curDate.add(1, 'm'));
  };
  const nextYear = () => {
    setCurDate(curDate.add(1, 'y'));
  };
  const prevMonth = () => {
    setCurDate(curDate.sub(1, 'm'));
  };
  const prevYear = () => {
    setCurDate(curDate.sub(1, 'y'));
  };
  const today = () => {
    setCurDate(curDate.calendar().date());
  };

  return (
    <S.Controls>
      <S.Button onClick={prevYear} type="button">
        &lt;&lt;
      </S.Button>
      <S.Button onClick={prevMonth} type="button">
        &lt;
      </S.Button>
      <S.Button onClick={today} type="button">
        Today
      </S.Button>
      <S.Button onClick={nextMonth} type="button">
        &gt;
      </S.Button>
      <S.Button onClick={nextYear} type="button">
        &gt;&gt;
      </S.Button>
    </S.Controls>
  );
};

export type { Props };
export default DatepickerControls;
