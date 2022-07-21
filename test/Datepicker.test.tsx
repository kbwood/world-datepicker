import React from 'react';
import { render } from '@testing-library/react';
import Calendars from '@kbwood/world-calendars';
import '@kbwood/world-calendars/lib/Gregorian';
import Datepicker from '../src/Datepicker';

jest.mock('../src/Controls');
jest.mock('../src/Month');

describe('Datepicker', () => {
  const gregorian = Calendars.instance('gregorian');

  it('should display the datepicker', () => {
    expect(
      render(
        <Datepicker calendar={gregorian} date={gregorian.date(2022, 7, 3)} />
      ).container
    ).toMatchInlineSnapshot(`
      <div>
        <div
          aria-label="Select a date"
          class="sc-bczRLJ jHeHYS"
        >
          <div>
            Controls (current 2022-07-03 (Gregorian))
          </div>
          <div>
            Month for 2022-07-03 (Gregorian) (current 2022-07-03 (Gregorian))
          </div>
        </div>
      </div>
    `);
  });
});
