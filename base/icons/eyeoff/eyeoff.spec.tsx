import React from 'react';
import { render } from '@testing-library/react';
import { BasicEyeoff } from './eyeoff.composition';

it('should render with the correct role graphics-document', () => {
  const { getByRole } = render(<BasicEyeoff />);
  const rendered = getByRole('graphics-document');
  expect(rendered).toBeTruthy();
});
