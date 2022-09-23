import React from 'react';
import { render } from '@testing-library/react';
import { BasicExit } from './exit.composition';

it('should render with the correct role graphics-document', () => {
  const { getByRole } = render(<BasicExit />);
  const rendered = getByRole('graphics-document');
  expect(rendered).toBeTruthy();
});
