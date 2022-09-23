import React from 'react';
import { render } from '@testing-library/react';
import { BasicCamera } from './camera.composition';

it('should render with the correct role graphics-document', () => {
  const { getByRole } = render(<BasicCamera />);
  const rendered = getByRole('graphics-document');
  expect(rendered).toBeTruthy();
});
