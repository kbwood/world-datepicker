import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Calendars from '@kbwood/world-calendars';
import '@kbwood/world-calendars/lib/Gregorian';
import Controls, { Props } from '../src/Controls';
import { localisations } from '../src/Datepicker';
import '../src/l10n/Datepicker-fr';
import defaultTheme from '../src/theme';

describe('(Component) Controls', () => {
  const gregorian = Calendars.instance('gregorian');
  const user = userEvent.setup();

  const renderComp = (props: Props) =>
    render(
      <ThemeProvider theme={defaultTheme}>
        <Controls {...props} />
      </ThemeProvider>
    );

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
      local: localisations[''],
      setCurDate: () => {}
    };
    const { container } = renderComp(props);

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="sc-bczRLJ kvztRd"
        >
          <button
            aria-label="Show the previous year"
            class="sc-gsnTZi dMHeCX"
            type="button"
          >
            &lt;&lt;
          </button>
          <button
            aria-label="Show the previous month"
            class="sc-gsnTZi dMHeCX"
            type="button"
          >
            &lt;
          </button>
          <button
            aria-label="Show today's month"
            class="sc-gsnTZi dMHeCX"
            type="button"
          >
            Today
          </button>
          <button
            aria-label="Show the next month"
            class="sc-gsnTZi dMHeCX"
            type="button"
          >
            &gt;
          </button>
          <button
            aria-label="Show the next year"
            class="sc-gsnTZi dMHeCX"
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
      local: localisations[''],
      setCurDate: jest.fn()
    };
    renderComp(props);
    await user.click(screen.getByRole('button', { name: 'Show the previous year' }));

    expect(props.setCurDate).toHaveBeenCalledTimes(1);
    expect(props.setCurDate).toHaveBeenCalledWith(gregorian.date(2021, 7, 3));
  });

  it('should move to the previous month when selected', async () => {
    const props = {
      curDate: gregorian.date(2022, 7, 3),
      local: localisations[''],
      setCurDate: jest.fn()
    };
    renderComp(props);
    await user.click(screen.getByRole('button', { name: 'Show the previous month' }));

    expect(props.setCurDate).toHaveBeenCalledTimes(1);
    expect(props.setCurDate).toHaveBeenCalledWith(gregorian.date(2022, 6, 3));
  });

  it('should move to today when selected', async () => {
    const props = {
      curDate: gregorian.date(2022, 7, 3),
      local: localisations[''],
      setCurDate: jest.fn()
    };
    renderComp(props);
    await user.click(screen.getByRole('button', { name: 'Show today\'s month' }));

    expect(props.setCurDate).toHaveBeenCalledTimes(1);
    expect(props.setCurDate).toHaveBeenCalledWith(gregorian.date(2022, 7, 5));
  });

  it('should move to the next month when selected', async () => {
    const props = {
      curDate: gregorian.date(2022, 7, 3),
      local: localisations[''],
      setCurDate: jest.fn()
    };
    renderComp(props);
    await user.click(screen.getByRole('button', { name: 'Show the next month' }));

    expect(props.setCurDate).toHaveBeenCalledTimes(1);
    expect(props.setCurDate).toHaveBeenCalledWith(gregorian.date(2022, 8, 3));
  });

  it('should move to the next year when selected', async () => {
    const props = {
      curDate: gregorian.date(2022, 7, 3),
      local: localisations[''],
      setCurDate: jest.fn()
    };
    renderComp(props);
    await user.click(screen.getByRole('button', { name: 'Show the next year' }));

    expect(props.setCurDate).toHaveBeenCalledTimes(1);
    expect(props.setCurDate).toHaveBeenCalledWith(gregorian.date(2023, 7, 3));
  });

  it('should render the datepicker controls in French', () => {
    const props = {
      curDate: gregorian.date(2022, 7, 3),
      local: localisations.fr,
      setCurDate: () => {}
    };
    renderComp(props);

    expect(screen.getByRole('button', { name: 'Voir l\'année précédent' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Voir le mois précédent' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Voir aujourd\'hui' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Voir le mois suivant' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Voir l\'année suivant' })).toBeInTheDocument();
  });
});
