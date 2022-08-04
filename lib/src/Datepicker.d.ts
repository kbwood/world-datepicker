/// <reference types="react" />
import { CalendarBase, CDate } from '@kbwood/world-calendars';
import { Theme } from './theme';
import { DisplayOptions, Localisation, NotifyDate } from './types';
interface Props {
    calendar: CalendarBase;
    date?: CDate;
    maxDate?: CDate;
    minDate?: CDate;
    onSelect?: NotifyDate;
    options?: DisplayOptions;
    theme?: Theme;
}
declare type LocalisationsMap = {
    [index: string]: Localisation;
};
declare const localisations: LocalisationsMap;
declare const Datepicker: ({ calendar, date, maxDate, minDate, onSelect, options, theme }: Props) => JSX.Element;
export type { Localisation, Props };
export { localisations };
export default Datepicker;
