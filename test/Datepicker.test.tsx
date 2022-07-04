import React from 'react';
import { render } from '@testing-library/react';
import Calendars from 'world-calendars';
import 'world-calendars/lib/Gregorian';
import Datepicker from '../src/Datepicker';

jest.mock('../src/DatepickerControls');
jest.mock('../src/DatepickerHeader');
jest.mock('../src/DatepickerMonth');

describe('Datepicker', () => {
  const gregorian = Calendars.instance('gregorian');

  it('should display the datepicker', () => {
    expect(render(<Datepicker calendar={gregorian} />).container)
      .toMatchInlineSnapshot(`
      <div>
        <div
          class="datepicker"
        >
          <div>
            Controls (current 2022-07-03 (Gregorian))
          </div>
          <div>
            Month header (current 2022-07-03 (Gregorian))
          </div>
          <div>
            Month for 2022-07-03 (Gregorian) (current 2022-07-03 (Gregorian))
          </div>
        </div>
      </div>
    `);
  });
});
