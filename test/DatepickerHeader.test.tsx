import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Calendars from 'world-calendars';
import 'world-calendars/lib/Gregorian';
import DatepickerHeader, { Props } from '../src/DatepickerHeader';
import defaultTheme from '../src/theme';

describe('(Component) DatepickerHeader', () => {
  const gregorian = Calendars.instance('gregorian');
  const user = userEvent.setup();

  const renderComp = (props: Props) =>
    render(
      <ThemeProvider theme={defaultTheme}>
        <DatepickerHeader {...props} />
      </ThemeProvider>
    );

  it('should render a month header', () => {
    const props = {
      curDate: gregorian.date(2022, 7, 3),
      setCurDate: () => {}
    };
    const { container } = renderComp(props);

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="datepickerHeader"
        >
          <select
            aria-label="Select month"
            class="sc-bczRLJ exCqBZ"
          >
            <option
              value="1"
            >
              January
            </option>
            <option
              value="2"
            >
              February
            </option>
            <option
              value="3"
            >
              March
            </option>
            <option
              value="4"
            >
              April
            </option>
            <option
              value="5"
            >
              May
            </option>
            <option
              value="6"
            >
              June
            </option>
            <option
              value="7"
            >
              July
            </option>
            <option
              value="8"
            >
              August
            </option>
            <option
              value="9"
            >
              September
            </option>
            <option
              value="10"
            >
              October
            </option>
            <option
              value="11"
            >
              November
            </option>
            <option
              value="12"
            >
              December
            </option>
          </select>
          <select
            aria-label="Select year"
            class="sc-bczRLJ exCqBZ"
          >
            <option
              value="2002"
            >
              2002
            </option>
            <option
              value="2003"
            >
              2003
            </option>
            <option
              value="2004"
            >
              2004
            </option>
            <option
              value="2005"
            >
              2005
            </option>
            <option
              value="2006"
            >
              2006
            </option>
            <option
              value="2007"
            >
              2007
            </option>
            <option
              value="2008"
            >
              2008
            </option>
            <option
              value="2009"
            >
              2009
            </option>
            <option
              value="2010"
            >
              2010
            </option>
            <option
              value="2011"
            >
              2011
            </option>
            <option
              value="2012"
            >
              2012
            </option>
            <option
              value="2013"
            >
              2013
            </option>
            <option
              value="2014"
            >
              2014
            </option>
            <option
              value="2015"
            >
              2015
            </option>
            <option
              value="2016"
            >
              2016
            </option>
            <option
              value="2017"
            >
              2017
            </option>
            <option
              value="2018"
            >
              2018
            </option>
            <option
              value="2019"
            >
              2019
            </option>
            <option
              value="2020"
            >
              2020
            </option>
            <option
              value="2021"
            >
              2021
            </option>
            <option
              value="2022"
            >
              2022
            </option>
            <option
              value="2023"
            >
              2023
            </option>
            <option
              value="2024"
            >
              2024
            </option>
            <option
              value="2025"
            >
              2025
            </option>
            <option
              value="2026"
            >
              2026
            </option>
            <option
              value="2027"
            >
              2027
            </option>
            <option
              value="2028"
            >
              2028
            </option>
            <option
              value="2029"
            >
              2029
            </option>
            <option
              value="2030"
            >
              2030
            </option>
            <option
              value="2031"
            >
              2031
            </option>
            <option
              value="2032"
            >
              2032
            </option>
            <option
              value="2033"
            >
              2033
            </option>
            <option
              value="2034"
            >
              2034
            </option>
            <option
              value="2035"
            >
              2035
            </option>
            <option
              value="2036"
            >
              2036
            </option>
            <option
              value="2037"
            >
              2037
            </option>
            <option
              value="2038"
            >
              2038
            </option>
            <option
              value="2039"
            >
              2039
            </option>
            <option
              value="2040"
            >
              2040
            </option>
            <option
              value="2041"
            >
              2041
            </option>
            <option
              value="2042"
            >
              2042
            </option>
          </select>
        </div>
      </div>
    `);
  });

  it('should update the month when selected', async () => {
    const props = {
      curDate: gregorian.date(2022, 7, 3),
      setCurDate: jest.fn()
    };
    renderComp(props);
    await user.selectOptions(screen.getByLabelText('Select month'), 'February');

    expect(props.setCurDate).toHaveBeenCalledTimes(1);
    expect(props.setCurDate).toHaveBeenCalledWith(gregorian.date(2022, 2, 3));
  });

  it('should update the year when selected', async () => {
    const props = {
      curDate: gregorian.date(2022, 7, 3),
      setCurDate: jest.fn()
    };
    renderComp(props);
    await user.selectOptions(screen.getByLabelText('Select year'), '2024');

    expect(props.setCurDate).toHaveBeenCalledTimes(1);
    expect(props.setCurDate).toHaveBeenCalledWith(gregorian.date(2024, 7, 3));
  });
});
