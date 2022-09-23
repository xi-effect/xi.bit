import React from 'react';
import { render } from '@testing-library/react';
import { BasicCheck } from './check.composition';

it('should render with the correct role graphics-document', () => {
  const { getByRole } = render(<BasicCheck />);
  const rendered = getByRole('graphics-document');
  expect(rendered).toBeTruthy();
});
