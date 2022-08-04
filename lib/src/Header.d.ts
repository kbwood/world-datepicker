/// <reference types="react" />
import { CDate } from '@kbwood/world-calendars';
import { Localisation, NotifyDate } from './types';
interface Props {
    curDate: CDate;
    local: Localisation;
    maxDate?: CDate;
    minDate?: CDate;
    setCurDate: NotifyDate;
}
declare const Header: ({ curDate, local, maxDate, minDate, setCurDate }: Props) => JSX.Element;
export type { Props };
export default Header;
