import React from 'react';
import { render } from '@testing-library/react';
import { BasicAccount } from './account.composition';

it('should render with the correct id svg-icon', () => {
  const { getByRole } = render(<BasicAccount />);
  const rendered = getByRole('svg');
  expect(rendered).toBeTruthy();
});
