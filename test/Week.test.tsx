import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Calendars from '@kbwood/world-calendars';
import '@kbwood/world-calendars/lib/Gregorian';
import Week, { Props } from '../src/Week';
import defaultTheme from '../src/theme';

describe('(Component) Week', () => {
  const gregorian = Calendars.instance('gregorian');
  const table = document.createElement('table');
  document.body.appendChild(table);
  const tbody = document.createElement('tbody');
  table.appendChild(tbody);
  const renderOptions = { container: tbody };
  const user = userEvent.setup();

  const renderComp = (props: Props) =>
    render(
      <ThemeProvider theme={defaultTheme}>
        <Week {...props} />
      </ThemeProvider>,
      renderOptions
    );

  it('should render a week', () => {
    const props = {
      curDate: gregorian.date(2022, 7, 3),
      daysInWeek: 7,
      fromDate: gregorian.date(2022, 6, 29),
      onSelect: () => {},
      options: { selectOtherMonth: true, showOtherMonth: true }
    };
    const { container } = renderComp(props);

    expect(container).toMatchInlineSnapshot(`
      <tbody>
        <tr>
          <td
            class="sc-bczRLJ jPKstU"
          >
            <button
              class="sc-gsnTZi jcbbiC"
              tabindex="-1"
              type="button"
              value="2022-6-29"
            >
              29
            </button>
          </td>
          <td
            class="sc-bczRLJ jPKstU"
          >
            <button
              class="sc-gsnTZi jcbbiC"
              tabindex="-1"
              type="button"
              value="2022-6-30"
            >
              30
            </button>
          </td>
          <td
            class="sc-bczRLJ gSNRqz"
          >
            <button
              class="sc-gsnTZi jcbbiC"
              tabindex="-1"
              type="button"
              value="2022-7-1"
            >
              1
            </button>
          </td>
          <td
            class="sc-bczRLJ cWHtcq"
          >
            <button
              class="sc-gsnTZi jcbbiC"
              tabindex="-1"
              type="button"
              value="2022-7-2"
            >
              2
            </button>
          </td>
          <td
            class="sc-bczRLJ iBhMdr"
          >
            <button
              class="sc-gsnTZi jcbbiC"
              tabindex="0"
              type="button"
              value="2022-7-3"
            >
              3
            </button>
          </td>
          <td
            class="sc-bczRLJ gSNRqz"
          >
            <button
              class="sc-gsnTZi jcbbiC"
              tabindex="-1"
              type="button"
              value="2022-7-4"
            >
              4
            </button>
          </td>
          <td
            class="sc-bczRLJ gSNRqz"
          >
            <button
              class="sc-gsnTZi jcbbiC"
              tabindex="-1"
              type="button"
              value="2022-7-5"
            >
              5
            </button>
          </td>
        </tr>
      </tbody>
    `);
  });

  it('should not allow selection of other month days', () => {
    const props = {
      curDate: gregorian.date(2022, 7, 3),
      daysInWeek: 7,
      fromDate: gregorian.date(2022, 6, 29),
      onSelect: () => {},
      options: { selectOtherMonth: false, showOtherMonth: true }
    };
    const { container } = renderComp(props);

    expect(container.querySelector('td')).toMatchInlineSnapshot(`
      <td
        class="sc-bczRLJ jPKstU"
      >
        <span
          class="sc-dkzDqf cQvaCj"
        >
          29
        </span>
      </td>
    `);
  });

  it('should not show other month days', () => {
    const props = {
      curDate: gregorian.date(2022, 7, 3),
      daysInWeek: 7,
      fromDate: gregorian.date(2022, 6, 29),
      onSelect: () => {},
      options: { selectOtherMonth: false, showOtherMonth: false }
    };
    const { container } = renderComp(props);

    /* eslint-disable no-irregular-whitespace */
    expect(container.querySelector('td')).toMatchInlineSnapshot(`
      <td
        class="sc-bczRLJ jPKstU"
      >
         
      </td>
    `);
    /* eslint-enable no-irregular-whitespace */
  });

  it('should render a different/shorter week', () => {
    const props = {
      curDate: gregorian.date(2022, 7, 3),
      daysInWeek: 5,
      fromDate: gregorian.date(2022, 7, 1),
      onSelect: () => {},
      options: {}
    };
    const { container } = renderComp(props);

    expect(container).toMatchInlineSnapshot(`
      <tbody>
        <tr>
          <td
            class="sc-bczRLJ gSNRqz"
          >
            <button
              class="sc-gsnTZi jcbbiC"
              tabindex="-1"
              type="button"
              value="2022-7-1"
            >
              1
            </button>
          </td>
          <td
            class="sc-bczRLJ cWHtcq"
          >
            <button
              class="sc-gsnTZi jcbbiC"
              tabindex="-1"
              type="button"
              value="2022-7-2"
            >
              2
            </button>
          </td>
          <td
            class="sc-bczRLJ iBhMdr"
          >
            <button
              class="sc-gsnTZi jcbbiC"
              tabindex="0"
              type="button"
              value="2022-7-3"
            >
              3
            </button>
          </td>
          <td
            class="sc-bczRLJ gSNRqz"
          >
            <button
              class="sc-gsnTZi jcbbiC"
              tabindex="-1"
              type="button"
              value="2022-7-4"
            >
              4
            </button>
          </td>
          <td
            class="sc-bczRLJ gSNRqz"
          >
            <button
              class="sc-gsnTZi jcbbiC"
              tabindex="-1"
              type="button"
              value="2022-7-5"
            >
              5
            </button>
          </td>
        </tr>
      </tbody>
    `);
  });

  it('should respond to date clicks', async () => {
    const props = {
      curDate: gregorian.date(2022, 7, 3),
      daysInWeek: 5,
      fromDate: gregorian.date(2022, 7, 1),
      onSelect: jest.fn(),
      options: {}
    };
    renderComp(props);
    await user.click(screen.getByRole('button', { name: '2' }));

    expect(props.onSelect).toHaveBeenCalledTimes(1);
    expect(props.onSelect).toHaveBeenCalledWith(gregorian.date(2022, 7, 2));

    await user.click(screen.getByRole('button', { name: '5' }));

    expect(props.onSelect).toHaveBeenCalledTimes(2);
    expect(props.onSelect).toHaveBeenCalledWith(gregorian.date(2022, 7, 5));
  });
});
