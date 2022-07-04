import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Calendars from 'world-calendars';
import 'world-calendars/lib/Gregorian';
import DatepickerControls from '../src/DatepickerControls';

describe('(Component) DatepickerControls', () => {
  const gregorian = Calendars.instance('gregorian');
  const user = userEvent.setup();

  beforeAll(() => {
    const today = gregorian.date(2022, 7, 5);
    jest.spyOn(gregorian, 'date').mockImplementation(() => today);
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should render the datepicker controls', () => {
    const props = {
      curDate: gregorian.date(2022, 7, 3),
      setCurDate: () => {}
    };
    const { container } = render(<DatepickerControls {...props} />);

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="datepickerControls"
        >
          <button
            type="button"
          >
            &lt;&lt;
          </button>
          <button
            type="button"
          >
            &lt;
          </button>
          <button
            type="button"
          >
            Today
          </button>
          <button
            type="button"
          >
            &gt;
          </button>
          <button
            type="button"
          >
            &gt;&gt;
          </button>
        </div>
      </div>
    `);
  });

  it('should move to the previous year when selected', async () => {
    const props = {
      curDate: gregorian.date(2022, 7, 3),
      setCurDate: jest.fn()
    };
    render(<DatepickerControls {...props} />);
    await user.click(screen.getByRole('button', { name: '<<' }));

    expect(props.setCurDate).toHaveBeenCalledTimes(1);
    expect(props.setCurDate).toHaveBeenCalledWith(gregorian.date(2021, 7, 3));
  });

  it('should move to the previous month when selected', async () => {
    const props = {
      curDate: gregorian.date(2022, 7, 3),
      setCurDate: jest.fn()
    };
    render(<DatepickerControls {...props} />);
    await user.click(screen.getByRole('button', { name: '<' }));

    expect(props.setCurDate).toHaveBeenCalledTimes(1);
    expect(props.setCurDate).toHaveBeenCalledWith(gregorian.date(2022, 6, 3));
  });

  it('should move to today when selected', async () => {
    const props = {
      curDate: gregorian.date(2022, 7, 3),
      setCurDate: jest.fn()
    };
    render(<DatepickerControls {...props} />);
    await user.click(screen.getByRole('button', { name: 'Today' }));

    expect(props.setCurDate).toHaveBeenCalledTimes(1);
    expect(props.setCurDate).toHaveBeenCalledWith(gregorian.date(2022, 7, 5));
  });

  it('should move to the next month when selected', async () => {
    const props = {
      curDate: gregorian.date(2022, 7, 3),
      setCurDate: jest.fn()
    };
    render(<DatepickerControls {...props} />);
    await user.click(screen.getByRole('button', { name: '>' }));

    expect(props.setCurDate).toHaveBeenCalledTimes(1);
    expect(props.setCurDate).toHaveBeenCalledWith(gregorian.date(2022, 8, 3));
  });

  it('should move to the next year when selected', async () => {
    const props = {
      curDate: gregorian.date(2022, 7, 3),
      setCurDate: jest.fn()
    };
    render(<DatepickerControls {...props} />);
    await user.click(screen.getByRole('button', { name: '>>' }));

    expect(props.setCurDate).toHaveBeenCalledTimes(1);
    expect(props.setCurDate).toHaveBeenCalledWith(gregorian.date(2023, 7, 3));
  });
});
