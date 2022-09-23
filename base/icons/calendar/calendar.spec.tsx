import React from 'react';
import { render } from '@testing-library/react';
import { BasicCalendar } from './calendar.composition';

it('should render with the correct role graphics-document', () => {
  const { getByRole } = render(<BasicCalendar />);
  const rendered = getByRole('graphics-document');
  expect(rendered).toBeTruthy();
});
