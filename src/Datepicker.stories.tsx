import React, { useEffect, useState } from 'react';
import { Story } from '@storybook/react';
import Calendars, { CalendarBase, CDate } from '@kbwood/world-calendars';
import '@kbwood/world-calendars/lib/Coptic';
import '@kbwood/world-calendars/lib/Discworld';
import '@kbwood/world-calendars/lib/Ethiopian';
import '@kbwood/world-calendars/lib/l10n/Ethiopian-am';
import '@kbwood/world-calendars/lib/Gregorian';
import '@kbwood/world-calendars/lib/l10n/Gregorian-ar';
import '@kbwood/world-calendars/lib/l10n/Gregorian-fr';
import '@kbwood/world-calendars/lib/l10n/Gregorian-zh-CN';
import '@kbwood/world-calendars/lib/Hebrew';
import '@kbwood/world-calendars/lib/l10n/Hebrew-he';
import '@kbwood/world-calendars/lib/Islamic';
import '@kbwood/world-calendars/lib/l10n/Islamic-ar';
import '@kbwood/world-calendars/lib/Julian';
import '@kbwood/world-calendars/lib/l10n/Julian-fr';
import '@kbwood/world-calendars/lib/Mayan';
import '@kbwood/world-calendars/lib/Nanakshahi';
import '@kbwood/world-calendars/lib/l10n/Nanakshahi-pa';
import '@kbwood/world-calendars/lib/Nepali';
import '@kbwood/world-calendars/lib/l10n/Nepali-ne';
import '@kbwood/world-calendars/lib/Persian';
import '@kbwood/world-calendars/lib/l10n/Persian-fa';
import '@kbwood/world-calendars/lib/Taiwan';
import '@kbwood/world-calendars/lib/l10n/Taiwan-zh-TW';
import '@kbwood/world-calendars/lib/Thai';
import '@kbwood/world-calendars/lib/l10n/Thai-th';
import '@kbwood/world-calendars/lib/UmmAlQura';
import '@kbwood/world-calendars/lib/l10n/UmmAlQura-ar';
import Datepicker from './Datepicker';
import './l10n/Datepicker-ar';
import './l10n/Datepicker-fr';
import { Theme } from './theme';

type StoryProps = {
  alternateTheme: boolean;
  calendarName: string;
  calendarLanguage: string,
  date: string;
  datepickerLanguage: string,
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
    sizeBody: '24px',
    sizeHeader: '28px'
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
    calendarLanguage: {
      control: 'select',
      options: ['  (Default)', 'am (Ethiopian)', 'ar (Gregorian, Islamic, Umm al-Qura)', 'fa (Persian)', 'fr (Gregorian, Julian)', 'he (Hebrew)', 'ne (Nepali)', 'pa (Nanakshahi)', 'th (Thai)', 'zh-TW (Taiwan)', 'zh-CN (Gregorian)']
    },
    date: { control: 'text' },
    datepickerLanguage: {
      control: 'select',
      options: ['  (Default)', 'ar (Arabic)', 'fr (French)']
    },
    selectOtherMonth: { control: 'boolean' },
    showOtherMonth: { control: 'boolean' }
  }
};

const getDate = (calendar: CalendarBase, date: string): CDate | undefined => {
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
};

const Template: Story<StoryProps> = (
  { alternateTheme, calendarName, calendarLanguage = '', date = '', datepickerLanguage = '', selectOtherMonth, showOtherMonth }: StoryProps
) => {
  const calendar = Calendars.instance(calendarName, calendarLanguage.split(' ')[0]);
  const [curDate, setCurDate] = useState<CDate | undefined>();
  useEffect(() => {
    setCurDate(getDate(calendar, date));
  }, [calendar, date]);
  const onSelect = (date: CDate) => {
    setCurDate(date);
  };
  const options = { language: datepickerLanguage.split(' ')[0], selectOtherMonth, showOtherMonth };
  const theme = alternateTheme ? altTheme : undefined;
  return <Datepicker
    calendar={calendar}
    date={curDate}
    onSelect={onSelect}
    options={options}
    theme={theme}
  />;
};

export const Default = Template.bind({});
Default.args = {
  alternateTheme: false,
  calendarName: 'Gregorian',
  calendarLanguage: '  (Default)',
  date: 'yyyy-mm-dd',
  datepickerLanguage: '  (Default)',
  selectOtherMonth: false,
  showOtherMonth: false
};
