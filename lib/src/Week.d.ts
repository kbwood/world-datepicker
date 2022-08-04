/// <reference types="react" />
import { CDate } from '@kbwood/world-calendars';
import { DisplayOptions, NotifyDate } from './types';
interface Props {
    curDate: CDate;
    daysInWeek: number;
    fromDate: CDate;
    maxDate?: CDate;
    minDate?: CDate;
    onSelect: NotifyDate;
    options: DisplayOptions;
}
declare const Week: ({ curDate, daysInWeek, fromDate, maxDate, minDate, onSelect, options }: Props) => JSX.Element;
export type { Props };
export default Week;
