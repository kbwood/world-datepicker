import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Calendars from 'world-calendars';
import 'world-calendars/lib/Gregorian';
import DatepickerWeek from '../src/DatepickerWeek';

describe('(Component) DatepickerWeek', () => {
  const gregorian = Calendars.instance('gregorian');
  const table = document.createElement('table');
  document.body.appendChild(table);
  const tbody = document.createElement('tbody');
  table.appendChild(tbody);
  const renderOptions = { container: tbody };
  const user = userEvent.setup();

  it('should render a week', () => {
    const props = {
      curDate: gregorian.date(2022, 7, 3),
      daysInWeek: 7,
      fromDate: gregorian.date(2022, 6, 29),
      onSelect: () => {}
    };
    const { container } = render(<DatepickerWeek {...props} />, renderOptions);

    expect(container).toMatchInlineSnapshot(`
      <tbody>
        <tr>
          <td>
            <button
              type="button"
              value="2022-6-29"
            >
              29
            </button>
          </td>
          <td>
            <button
              type="button"
              value="2022-6-30"
            >
              30
            </button>
          </td>
          <td>
            <button
              type="button"
              value="2022-7-1"
            >
              1
            </button>
          </td>
          <td>
            <button
              type="button"
              value="2022-7-2"
            >
              2
            </button>
          </td>
          <td>
            <button
              type="button"
              value="2022-7-3"
            >
              3
              *
            </button>
          </td>
          <td>
            <button
              type="button"
              value="2022-7-4"
            >
              4
            </button>
          </td>
          <td>
            <button
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

  it('should render a different/shorter week', () => {
    const props = {
      curDate: gregorian.date(2022, 7, 3),
      daysInWeek: 5,
      fromDate: gregorian.date(2022, 7, 1),
      onSelect: () => {}
    };
    const { container } = render(<DatepickerWeek {...props} />, renderOptions);

    expect(container).toMatchInlineSnapshot(`
      <tbody>
        <tr>
          <td>
            <button
              type="button"
              value="2022-7-1"
            >
              1
            </button>
          </td>
          <td>
            <button
              type="button"
              value="2022-7-2"
            >
              2
            </button>
          </td>
          <td>
            <button
              type="button"
              value="2022-7-3"
            >
              3
              *
            </button>
          </td>
          <td>
            <button
              type="button"
              value="2022-7-4"
            >
              4
            </button>
          </td>
          <td>
            <button
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
      onSelect: jest.fn()
    };
    render(<DatepickerWeek {...props} />, renderOptions);
    await user.click(screen.getByRole('button', { name: '2' }));

    expect(props.onSelect).toHaveBeenCalledTimes(1);
    expect(props.onSelect).toHaveBeenCalledWith(gregorian.date(2022, 7, 2));

    await user.click(screen.getByRole('button', { name: '5' }));

    expect(props.onSelect).toHaveBeenCalledTimes(2);
    expect(props.onSelect).toHaveBeenCalledWith(gregorian.date(2022, 7, 5));
  });
});
