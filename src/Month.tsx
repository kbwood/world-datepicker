import React, { ReactNode, useEffect, useRef } from 'react';
import { CalendarBase, CDate } from '@kbwood/world-calendars';
import Header from './Header';
import * as S from './Month.styles';
import { DisplayOptions, Localisation, NotifyDate, OptCDate } from './types';
import useFocus from './useFocus';
import Week from './Week';

interface Props {
  curDate: CDate,
  forDate: CDate,
  local: Localisation,
  maxDate?: CDate,
  minDate?: CDate,
  onSelect: NotifyDate,
  options: DisplayOptions,
  setCurDate: NotifyDate,
}

const generateDays = (calendar: CalendarBase) => {
  const daysInWeek = calendar.daysInWeek();
  const days: ReactNode[] = [];
  for (let i = 0; i < daysInWeek; i++) {
    const index = (i + calendar.local.firstDay) % daysInWeek;
    const name = calendar.local.dayNames[index];
    const minName = calendar.local.dayNamesMin[index];
    days.push(<th key={minName}><abbr title={name}>{minName}</abbr></th>);
  }
  return days;
};

const generateWeeks = (
  fromDate: CDate,
  weekCount: number,
  daysInWeek: number,
  options: DisplayOptions,
  curDate: CDate,
  maxDate: OptCDate,
  minDate: OptCDate,
  onSelect: NotifyDate
) => {
  const weeks: ReactNode[] = [];
  let forDate = fromDate;
  for (let i = 0; i < weekCount; i++) {
    weeks.push(
      <Week
        key={forDate.toString()}
        curDate={curDate}
        daysInWeek={daysInWeek}
        fromDate={forDate}
        maxDate={maxDate}
        minDate={minDate}
        onSelect={onSelect}
        options={options}
      />
    );
    forDate = forDate.add(1, 'w');
  }
  return weeks;
};

const getStartOfWeek = (date: CDate) => {
  const firstDay = date.calendar().local.firstDay;
  const dow = date.dayOfWeek();
  return date.sub(dow < firstDay ? date.calendar().daysInWeek() : dow, 'd').add(firstDay, 'd');
};

const getEndOfWeek = (date: CDate) =>
  getStartOfWeek(date).add(date.calendar().daysInWeek() - 1, 'd');

const max = (d1: CDate, d2: CDate = d1): CDate => d1.compareTo(d2) === 1 ? d1 : d2;

const min = (d1: CDate, d2: CDate = d1): CDate => d1.compareTo(d2) === -1 ? d1 : d2;

const Month = ({ curDate, forDate, local, maxDate, minDate, onSelect, options, setCurDate }: Props) => {
  const tableRef = useRef<HTMLTableSectionElement>(null);
  const hasFocus = useFocus(tableRef);
  const calendar = forDate.calendar();
  const daysInWeek = calendar.daysInWeek();
  const monthFirst = forDate.set(calendar.minDay, 'd');
  const monthCalc = monthFirst
    .sub(monthFirst.dayOfWeek(), 'd')
    .add(calendar.local.firstDay, 'd');
  const monthStart =
    monthCalc.month() === forDate.month() && monthCalc.day() > calendar.minDay ? monthCalc.sub(1, 'w') : monthCalc;
  const monthLast = monthFirst.add(1, 'm').sub(1, 'd');
  const weekCount = Math.ceil(
    (monthLast.toJD() - monthStart.toJD() + 1) / daysInWeek
  );
  const monthLabel = `${calendar.local.monthNames[curDate.month() - calendar.firstMonth]} ${curDate.year()}`;
  const setTarget = (target: CDate) => { setCurDate(max(min(target, maxDate), minDate)); };

  useEffect(() => {
    const lrDirection = calendar.local.isRTL ? -1 : 1;
    const handleKeystrokes = (event: KeyboardEvent) => {
      switch (event.code) {
      case 'ArrowDown':
        setTarget(curDate.add(1, 'w'));
        break;
      case 'ArrowLeft':
        setTarget(curDate.sub(lrDirection, 'd'));
        break;
      case 'ArrowRight':
        setTarget(curDate.add(lrDirection, 'd'));
        break;
      case 'ArrowUp':
        setTarget(curDate.sub(1, 'w'));
        break;
      case 'End':
        setTarget(getEndOfWeek(curDate));
        break;
      case 'Home':
        setTarget(getStartOfWeek(curDate));
        break;
      case 'PageDown':
        setTarget(curDate.add(1, event.shiftKey ? 'y' : 'm'));
        break;
      case 'PageUp':
        setTarget(curDate.sub(1, event.shiftKey ? 'y' : 'm'));
        break;
      default: // Do nothing
      }
    };
    const table = tableRef.current;
    if (table) {
      table.addEventListener('keydown', handleKeystrokes);
      if (hasFocus) {
        const curButton = table.querySelector('button[tabindex="0"]') as HTMLElement;
        if (curButton) {
          curButton.focus();
        }
      }
    }

    return () => {
      if (table) {
        table.removeEventListener('keydown', handleKeystrokes);
      }
    };
  }, [calendar, curDate, hasFocus, setCurDate, tableRef.current]);

  return (
    <S.MonthTable aria-label={monthLabel}>
      <S.TableHeader>
        <S.MonthHeader>
          <th colSpan={daysInWeek}>
            <Header curDate={curDate} local={local} maxDate={maxDate} minDate={minDate} setCurDate={setCurDate} />
          </th>
        </S.MonthHeader>
        <S.WeekHeader>
          {generateDays(calendar)}
        </S.WeekHeader>
      </S.TableHeader>
      <S.TableBody ref={tableRef}>
        {generateWeeks(monthStart, weekCount, daysInWeek, options, curDate, maxDate, minDate, onSelect)}
      </S.TableBody>
    </S.MonthTable>
  );
};

export type { Props };
export default Month;
