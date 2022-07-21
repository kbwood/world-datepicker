import React from 'react';
import { CDate } from '@kbwood/world-calendars';
import * as S from './Controls.styles';
import { Localisation, NotifyDate } from './types';

interface Props {
  curDate: CDate,
  local: Localisation,
  maxDate?: CDate,
  minDate?: CDate,
  setCurDate: NotifyDate,
}

const max = (d1: CDate, d2: CDate = d1): CDate => d1.compareTo(d2) === 1 ? d1 : d2;

const min = (d1: CDate, d2: CDate = d1): CDate => d1.compareTo(d2) === -1 ? d1 : d2;

const Controls = ({ curDate, local, maxDate, minDate, setCurDate }: Props) => {
  const setTarget = (target: CDate) => () => { setCurDate(max(min(target, maxDate), minDate)); };
  const nextMonth = setTarget(curDate.add(1, 'm'));
  const nextYear = setTarget(curDate.add(1, 'y'));
  const prevMonth = setTarget(curDate.sub(1, 'm'));
  const prevYear = setTarget(curDate.sub(1, 'y'));
  const today = setTarget(curDate.calendar().date());

  return (
    <S.Controls>
      <S.Button aria-label={local.prevYearLabel} onClick={prevYear} type="button">
        {local.prevYear}
      </S.Button>
      <S.Button aria-label={local.prevMonthLabel} onClick={prevMonth} type="button">
        {local.prevMonth}
      </S.Button>
      <S.Button aria-label={local.todayLabel} onClick={today} type="button">
        {local.today}
      </S.Button>
      <S.Button aria-label={local.nextMonthLabel} onClick={nextMonth} type="button">
        {local.nextMonth}
      </S.Button>
      <S.Button aria-label={local.nextYearLabel} onClick={nextYear} type="button">
        {local.nextYear}
      </S.Button>
    </S.Controls>
  );
};

export type { Props };
export default Controls;
