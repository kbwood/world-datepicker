import { render } from '@testing-library/react'
import React from 'react'
import Datepicker from '../src/Datepicker'

describe('Datepicker', () => {
	it('should display the datepicker', () => {
		expect(render(<Datepicker />).container).toMatchInlineSnapshot(`
<div>
  <div
    class="datepicker"
  >
    Datepicker
  </div>
</div>
`)
	})
})
