/// <reference types="react" />
import { CDate } from '@kbwood/world-calendars';
import { DisplayOptions, Localisation, NotifyDate } from './types';
interface Props {
    curDate: CDate;
    forDate: CDate;
    local: Localisation;
    maxDate?: CDate;
    minDate?: CDate;
    onSelect: NotifyDate;
    options: DisplayOptions;
    setCurDate: NotifyDate;
}
declare const Month: ({ curDate, forDate, local, maxDate, minDate, onSelect, options, setCurDate }: Props) => JSX.Element;
export type { Props };
export default Month;
