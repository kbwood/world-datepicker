import { Story } from '@storybook/react';
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
import './l10n/Datepicker-ar';
import './l10n/Datepicker-fr';
import './l10n/Datepicker-zh-CN';
declare type StoryProps = {
    alternateTheme: boolean;
    calendarName: string;
    calendarLanguage: string;
    date: string;
    datepickerLanguage: string;
    selectOtherMonth: boolean;
    showOtherMonth: boolean;
};
declare const _default: {
    title: string;
    argTypes: {
        alternateTheme: {
            control: string;
        };
        calendarName: {
            control: {
                type: string;
            };
            options: string[];
        };
        calendarLanguage: {
            control: string;
            options: string[];
        };
        date: {
            control: string;
        };
        datepickerLanguage: {
            control: string;
            options: string[];
        };
        selectOtherMonth: {
            control: string;
        };
        showOtherMonth: {
            control: string;
        };
    };
};
export default _default;
export declare const Default: Story<StoryProps>;
