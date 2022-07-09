import { CDate } from '@kbwood/world-calendars';

export interface DisplayOptions {
  selectOtherMonth?: boolean
  showOtherMonth?: boolean
}

export type NotifyDate = (date: CDate) => void
