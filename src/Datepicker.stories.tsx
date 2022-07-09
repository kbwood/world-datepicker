import React, { useEffect, useState } from 'react';
import Calendars, { CalendarBase, CDate } from '@kbwood/world-calendars';
import '@kbwood/world-calendars/lib/Coptic';
import '@kbwood/world-calendars/lib/Discworld';
import '@kbwood/world-calendars/lib/Ethiopian';
import '@kbwood/world-calendars/lib/Gregorian';
import '@kbwood/world-calendars/lib/Hebrew';
import '@kbwood/world-calendars/lib/Islamic';
import '@kbwood/world-calendars/lib/Julian';
import '@kbwood/world-calendars/lib/Mayan';
import '@kbwood/world-calendars/lib/Nanakshahi';
import '@kbwood/world-calendars/lib/Nepali';
import '@kbwood/world-calendars/lib/Persian';
import '@kbwood/world-calendars/lib/Taiwan';
import '@kbwood/world-calendars/lib/Thai';
import '@kbwood/world-calendars/lib/UmmAlQura';
import Datepicker from './Datepicker';
import { Theme } from './theme';

type StoryProps = {
  alternateTheme: boolean;
  calendarName: string;
  date: string;
  selectOtherMonth: boolean;
  showOtherMonth: boolean;
};

const altTheme: Theme = {
  color: {
    border: '#5c9ccc',
    controlsBG: '#fff',
    controlsFG: '#000',
    dayBG: '#dfeffc',
    dayBorder: '#c5dbec',
    dayFG: '#000',
    monthBG: '#5c9ccc',
    monthFG: '#fff',
    otherMonthBG: '#fff',
    otherMonthFG: '#000',
    selectedBG: '#4297d7',
    selectedFG: '#000',
    todayBG: '#fad42e',
    todayFG: '#000',
    unselectableFG: '#888',
    weekBG: '#fff',
    weekFG: '#000',
    weekendBG: '#d0e5f5',
    weekendFG: '#000'
  },
  font: {
    family: '"Times New Roman",serif',
    sizeBody: '16px',
    sizeHeader: '20px'
  }
};

export default {
  title: 'Datepicker',
  argTypes: {
    alternateTheme: { control: 'boolean' },
    calendarName: {
      control: {
        type: 'select'
      },
      options: ['Coptic', 'Discworld', 'Ethiopian', 'Gregorian', 'Hebrew', 'Islamic', 'Julian', 'Mayan', 'Nanakshahi', 'Nepali', 'Persian', 'Taiwan', 'Thai', 'UmmAlQura']
    },
    date: { control: 'text' },
    selectOtherMonth: { control: 'boolean' },
    showOtherMonth: { control: 'boolean' }
  }
};

function getDate (calendar: CalendarBase, date: string): CDate | undefined {
  const dateParts = date.split('-');
  if (dateParts.length !== 3) {
    return undefined;
  }
  const dateNumbers = dateParts.map(part => Number(part));
  if (dateNumbers.some(num => isNaN(num))) {
    return undefined;
  }
  try {
    return calendar.date(dateNumbers[0], dateNumbers[1], dateNumbers[2]);
  } catch (e) {
    return undefined;
  }
}

function Template ({ alternateTheme, calendarName, date = '', selectOtherMonth, showOtherMonth }: StoryProps) {
  const calendar = Calendars.instance(calendarName) || Calendars.instance('gregorian');
  const [curDate, setCurDate] = useState<CDate | undefined>();
  useEffect(() => {
    setCurDate(getDate(calendar, date));
  }, [calendar, date]);
  const onSelect = (date: CDate) => {
    setCurDate(date);
  };
  const options = { selectOtherMonth, showOtherMonth };
  const theme = alternateTheme ? altTheme : undefined;
  return <Datepicker calendar={calendar} date={curDate} onSelect={onSelect} options={options} theme={theme} />;
}

export const Default = Template.bind({});
