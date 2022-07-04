import React from 'react';
import Calendars, { CDate } from 'world-calendars';
import Datepicker, { Props as DPProps } from './Datepicker';
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

type Props = DPProps & {
  calendarName: string;
};

export default {
  title: 'Datepicker',
  component: Datepicker,
  argTypes: {
    calendarName: {
      control: { type: 'select' },
      options: [
        'Coptic',
        'Discworld',
        'Ethiopian',
        'Gregorian',
        'Hebrew',
        'Islamic',
        'Julian',
        'Mayan',
        'Nanakshahi',
        'Nepali',
        'Persian',
        'Taiwan',
        'Thai',
        'UmmAlQura'
      ]
    }
  }
};

function Template ({ calendarName, ...otherProps }: Props) {
  const calendar = calendarName ? Calendars.instance(calendarName) : undefined;
  const onSelect = (date: CDate) => {
    alert(`Selected ${date.toString()}`);
  };
  return <Datepicker {...otherProps} calendar={calendar} onSelect={onSelect} />;
}

export const Default = Template.bind({});
Default.args = {
  calendarName: 'Gregorian'
};
