import React from 'react';
import { render } from '@testing-library/react';
import { BasicSettings } from './settings.composition';

it('should render with the correct role graphics-document', () => {
  const { getByRole } = render(<BasicSettings />);
  const rendered = getByRole('graphics-document');
  expect(rendered).toBeTruthy();
});
