import React from 'react';
import { render } from '@testing-library/react';
import { BasicClose } from './close.composition';

it('should render with the correct role graphics-document', () => {
  const { getByRole } = render(<BasicClose />);
  const rendered = getByRole('graphics-document');
  expect(rendered).toBeTruthy();
});
