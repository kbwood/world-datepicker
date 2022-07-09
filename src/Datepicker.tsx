import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { CalendarBase, CDate } from 'world-calendars';
import * as S from './Datepicker.styles';
import DatepickerControls from './DatepickerControls';
import DatepickerMonth from './DatepickerMonth';
import defaultTheme, { Theme } from './theme';
import { DisplayOptions, NotifyDate } from './types';

interface Props {
  calendar: CalendarBase
  date?: CDate
  onSelect?: NotifyDate
  options?: DisplayOptions
  theme?: Theme
}

const Datepicker = ({ calendar, date, onSelect = () => {}, options = {}, theme = defaultTheme }: Props) => {
  const [curDate, setCurDate] = useState(date || calendar.date());
  useEffect(() => {
    setCurDate(date || calendar.date());
  }, [calendar, date]);

  if (!calendar) {
    return <div className="error">Missing calendar</div>;
  }

  return (
    <ThemeProvider theme={theme}>
      <S.Datepicker>
        <DatepickerControls curDate={curDate} setCurDate={setCurDate} />
        <DatepickerMonth
          curDate={curDate}
          forDate={curDate}
          onSelect={onSelect}
          options={options}
          setCurDate={setCurDate}
        />
      </S.Datepicker>
    </ThemeProvider>
  );
};

export type { Props };
export default Datepicker;
