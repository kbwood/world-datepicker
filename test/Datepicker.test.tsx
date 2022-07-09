import React from 'react';
import { render } from '@testing-library/react';
import Calendars from '@kbwood/world-calendars';
import '@kbwood/world-calendars/lib/Gregorian';
import Datepicker from '../src/Datepicker';

jest.mock('../src/DatepickerControls');
jest.mock('../src/DatepickerMonth');

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
          class="sc-bczRLJ dwkSbA"
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
