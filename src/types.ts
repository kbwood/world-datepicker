import { CDate } from 'world-calendars'

interface DisplayOptions {
  selectOtherMonth?: boolean
  showOtherMonth?: boolean
}

type NotifyDate = (date: CDate) => void

export { DisplayOptions, NotifyDate }
