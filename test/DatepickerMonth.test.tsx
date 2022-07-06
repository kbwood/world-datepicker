import React from 'react';
import { render } from '@testing-library/react';
import Calendars from 'world-calendars';
import 'world-calendars/lib/Gregorian';
import DatepickerMonth from '../src/DatepickerMonth';

jest.mock('../src/DatepickerHeader');
jest.mock('../src/DatepickerWeek');

describe('(Component) DatepickerMonth', () => {
  const gregorian = Calendars.instance('gregorian');

  it('should render a month', () => {
    const props = {
      curDate: gregorian.date(2022, 7, 3),
      forDate: gregorian.date(2022, 7, 1),
      onSelect: () => {},
      options: {},
      setCurDate: () => {}
    };
    const { container } = render(<DatepickerMonth {...props} />);

    expect(container).toMatchInlineSnapshot(`
      <div>
        <table
          class="datepickerMonth"
        >
          <thead>
            <tr>
              <th
                colspan="7"
              >
                <div>
                  Month header (current 2022-07-03 (Gregorian))
                </div>
              </th>
            </tr>
            <tr>
              <th>
                Su
              </th>
              <th>
                Mo
              </th>
              <th>
                Tu
              </th>
              <th>
                We
              </th>
              <th>
                Th
              </th>
              <th>
                Fr
              </th>
              <th>
                Sa
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Week from 2022-06-26 (Gregorian) - 7 days (current 2022-07-03 (Gregorian))
              </td>
            </tr>
            <tr>
              <td>
                Week from 2022-07-03 (Gregorian) - 7 days (current 2022-07-03 (Gregorian))
              </td>
            </tr>
            <tr>
              <td>
                Week from 2022-07-10 (Gregorian) - 7 days (current 2022-07-03 (Gregorian))
              </td>
            </tr>
            <tr>
              <td>
                Week from 2022-07-17 (Gregorian) - 7 days (current 2022-07-03 (Gregorian))
              </td>
            </tr>
            <tr>
              <td>
                Week from 2022-07-24 (Gregorian) - 7 days (current 2022-07-03 (Gregorian))
              </td>
            </tr>
            <tr>
              <td>
                Week from 2022-07-31 (Gregorian) - 7 days (current 2022-07-03 (Gregorian))
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    `);
  });
});
