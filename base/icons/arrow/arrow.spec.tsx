import React from 'react';
import { render } from '@testing-library/react';
import { BasicArrow } from './arrow.composition';

it('should render with the correct role graphics-document', () => {
  const { getByRole } = render(<BasicArrow />);
  const rendered = getByRole('graphics-document');
  expect(rendered).toBeTruthy();
});
