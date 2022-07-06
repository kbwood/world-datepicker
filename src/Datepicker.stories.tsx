import React from 'react';
import Calendars, { CalendarBase, CDate } from 'world-calendars';
import Datepicker from './Datepicker';
import 'world-calendars/lib/Coptic';
import 'world-calendars/lib/Discworld';
import 'world-calendars/lib/Ethiopian';
import 'world-calendars/lib/Gregorian';
import 'world-calendars/lib/Hebrew';
import 'world-calendars/lib/Islamic';
import 'world-calendars/lib/Julian';
import 'world-calendars/lib/Mayan';
import 'world-calendars/lib/Nanakshahi';
import 'world-calendars/lib/Nepali';
import 'world-calendars/lib/Persian';
import 'world-calendars/lib/Taiwan';
import 'world-calendars/lib/Thai';
import 'world-calendars/lib/UmmAlQura';

type Props = {
  calendarName: string;
  date: string;
  selectOtherMonth: boolean;
  showOtherMonth: boolean;
};

export default {
  title: 'Datepicker',
  argTypes: {
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
    return calendar.date(...dateNumbers);
  } catch (e) {
    return undefined;
  }
}

function Template ({ calendarName, date = '', selectOtherMonth, showOtherMonth }: Props) {
  const calendar = calendarName ? Calendars.instance(calendarName) : undefined;
  const curDate = getDate(calendar, date);
  const onSelect = (date: CDate) => {
    alert(`Selected ${date.toString()}`);
  };
  const options = { selectOtherMonth, showOtherMonth };
  return <Datepicker calendar={calendar} date={curDate} onSelect={onSelect} options={options} />;
}

export const Default = Template.bind({});
Default.args = {
  calendarName: 'Gregorian'
};
