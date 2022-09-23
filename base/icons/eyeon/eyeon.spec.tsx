import React from 'react';
import { render } from '@testing-library/react';
import { BasicEyeon } from './eyeon.composition';

it('should render with the correct role graphics-document', () => {
  const { getByRole } = render(<BasicEyeon />);
  const rendered = getByRole('graphics-document');
  expect(rendered).toBeTruthy();
});
