import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import Calendars from '@kbwood/world-calendars';
import '@kbwood/world-calendars/lib/Gregorian';
import { localisations } from '../src/Datepicker';
import Month from '../src/Month';
import defaultTheme from '../src/theme';

jest.mock('../src/Header');
jest.mock('../src/Week');

describe('(Component) Month', () => {
  const gregorian = Calendars.instance('gregorian');

  it('should render a month', () => {
    const props = {
      curDate: gregorian.date(2022, 7, 3),
      forDate: gregorian.date(2022, 7, 1),
      local: localisations[''],
      onSelect: () => {},
      options: {},
      setCurDate: () => {}
    };
    const { container } = render(
      <ThemeProvider theme={defaultTheme}>
        <Month {...props} />
      </ThemeProvider>
    );

    expect(container).toMatchInlineSnapshot(`
      <div>
        <table
          aria-label="July 2022"
          class="sc-hKMtZM iSDivR"
        >
          <thead
            class="sc-eCYdqJ egpUwA"
          >
            <tr
              class="sc-jSMfEi gngSZr"
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
              class="sc-gKXOVf evLySO"
            >
              <th>
                <abbr
                  title="Sunday"
                >
                  Su
                </abbr>
              </th>
              <th>
                <abbr
                  title="Monday"
                >
                  Mo
                </abbr>
              </th>
              <th>
                <abbr
                  title="Tuesday"
                >
                  Tu
                </abbr>
              </th>
              <th>
                <abbr
                  title="Wednesday"
                >
                  We
                </abbr>
              </th>
              <th>
                <abbr
                  title="Thursday"
                >
                  Th
                </abbr>
              </th>
              <th>
                <abbr
                  title="Friday"
                >
                  Fr
                </abbr>
              </th>
              <th>
                <abbr
                  title="Saturday"
                >
                  Sa
                </abbr>
              </th>
            </tr>
          </thead>
          <tbody
            class="sc-iBkjds djEmsT"
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
