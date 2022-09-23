import React from 'react';
import { render } from '@testing-library/react';
import { BasicAdd } from './add.composition';

it('should render with the correct role graphics-document', () => {
  const { getByRole } = render(<BasicAdd />);
  const rendered = getByRole('graphics-document');
  expect(rendered).toBeTruthy();
});
