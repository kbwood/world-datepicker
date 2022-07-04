import React, { FunctionComponent, ReactNode } from 'react';
import { CDate } from 'world-calendars';

interface Props {
  curDate: CDate;
  setCurDate: (date: CDate) => void;
}

const generateYears = (year: number) => {
  const years: ReactNode[] = [];
  for (let y = year - 20; y <= year + 20; y++) {
    years.push(
      <option key={y} value={y}>
        {y}
      </option>
    );
  }
  return years;
};

const DatepickerHeader: FunctionComponent<Props> = ({
  curDate,
  setCurDate
}) => {
  const cal = curDate.calendar();
  const year = curDate.year();
  const setMonth = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCurDate(curDate.set(Number(event.target.value), 'm'));
  };
  const setYear = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCurDate(curDate.set(Number(event.target.value), 'y'));
  };

  return (
    <div className="datepickerHeader">
      <select aria-label="Select month" onChange={setMonth} value={curDate.month()}>
        {cal.local.monthNames.map((name, i) => (
          <option key={name} value={i + cal.minMonth}>
            {name}
          </option>
        ))}
      </select>
      <select aria-label="Select year" onChange={setYear} value={year}>
        {generateYears(year)}
      </select>
    </div>
  );
};

export type { Props };
export default DatepickerHeader;
