import { CDate } from '@kbwood/world-calendars';

export interface DisplayOptions {
  language?: string,
  selectOtherMonth?: boolean,
  showOtherMonth?: boolean,
}

export interface Localisation {
  clear: string,
  clearLabel: string,
  close: string,
  closeLabel: string,
  dayLabel: string,
  defaultLabel: string,
  isRTL: boolean,
  monthLabel: string,
  nextMonth: string,
  nextMonthLabel: string,
  nextYear: string,
  nextYearLabel: string,
  prevMonth: string,
  prevMonthLabel: string,
  prevYear: string,
  prevYearLabel: string,
  today: string,
  todayLabel: string,
  week: string,
  weekLabel: string,
  yearLabel: string,
}

export type NotifyDate = (date: CDate) => void

export type OptCDate = CDate | undefined
