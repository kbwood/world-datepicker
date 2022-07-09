import { CDate } from 'world-calendars';

export interface DisplayOptions {
  selectOtherMonth?: boolean
  showOtherMonth?: boolean
}

export type NotifyDate = (date: CDate) => void
