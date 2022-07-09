import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import Calendars from '@kbwood/world-calendars';
import '@kbwood/world-calendars/lib/Gregorian';
import DatepickerMonth from '../src/DatepickerMonth';
import defaultTheme from '../src/theme';

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
    const { container } = render(
      <ThemeProvider theme={defaultTheme}>
        <DatepickerMonth {...props} />
      </ThemeProvider>
    );

    expect(container).toMatchInlineSnapshot(`
      <div>
        <table
          class="sc-bczRLJ eeaCGT"
        >
          <thead
            class="sc-gsnTZi eUAcrB"
          >
            <tr
              class="sc-dkzDqf buhFDb"
            >
              <th
                colspan="7"
              >
                <div>
                  Month header (current 2022-07-03 (Gregorian))
                </div>
              </th>
            </tr>
            <tr
              class="sc-hKMtZM duNagM"
            >
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
          <tbody
            class="sc-eCYdqJ dntofl"
          >
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
