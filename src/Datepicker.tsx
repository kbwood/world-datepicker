import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { CalendarBase, CDate } from '@kbwood/world-calendars';
import Controls from './Controls';
import * as S from './Datepicker.styles';
import Month from './Month';
import defaultTheme, { Theme } from './theme';
import { DisplayOptions, Localisation, NotifyDate } from './types';

interface Props {
  calendar: CalendarBase,
  date?: CDate,
  maxDate?: CDate,
  minDate?: CDate,
  onSelect?: NotifyDate,
  options?: DisplayOptions,
  theme?: Theme,
}
type LocalisationsMap = {
  [index: string]: Localisation,
}

const localisations: LocalisationsMap = {
  '': {
    clear: 'Clear',
    clearLabel: 'Clear all the dates',
    close: 'Close',
    closeLabel: 'Close the datepicker',
    // current: 'Current',
    // currentLabel: 'Show the current month',
    dayLabel: 'Select DD, M d, yyyy',
    defaultLabel: 'Select a date',
    // earlier: '&#160;&#160;▲',
    // later: '&#160;&#160;▼',
    isRTL: false,
    monthLabel: 'Change the month',
    nextMonth: '>',
    nextMonthLabel: 'Show the next month',
    nextYear: '>>',
    nextYearLabel: 'Show the next year',
    prevMonth: '<',
    prevMonthLabel: 'Show the previous month',
    prevYear: '<<',
    prevYearLabel: 'Show the previous year',
    today: 'Today',
    todayLabel: 'Show today\'s month',
    week: 'Wk',
    weekLabel: 'Week of the year',
    yearLabel: 'Change the year'
  }
};

const Datepicker = (
  { calendar, date, maxDate, minDate, onSelect = () => {}, options = {}, theme = defaultTheme }: Props
) => {
  const local = localisations[options.language || ''] || localisations[''];
  const [curDate, setCurDate] = useState(date || calendar.date());
  useEffect(() => {
    setCurDate(date || calendar.date());
  }, [calendar, date]);

  if (!calendar) {
    return <div className="error">Missing calendar</div>;
  }

  return (
    <ThemeProvider theme={theme}>
      <S.Datepicker aria-label={local.defaultLabel} isRTL={calendar.local.isRTL}>
        <Controls curDate={curDate} local={local} maxDate={maxDate} minDate={minDate} setCurDate={setCurDate} />
        <Month
          curDate={curDate}
          forDate={curDate}
          local={local}
          maxDate={maxDate}
          minDate={minDate}
          onSelect={onSelect}
          options={options}
          setCurDate={setCurDate}
        />
      </S.Datepicker>
    </ThemeProvider>
  );
};

export type { Localisation, Props };
export { localisations };
export default Datepicker;
