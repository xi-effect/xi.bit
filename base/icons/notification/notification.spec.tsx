import React from 'react';
import { render } from '@testing-library/react';
import { BasicNotification } from './notification.composition';

it('should render with the correct role graphics-document', () => {
  const { getByRole } = render(<BasicNotification />);
  const rendered = getByRole('graphics-document');
  expect(rendered).toBeTruthy();
});
