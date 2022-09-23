import React from 'react';
import { render } from '@testing-library/react';
import { BasicTask } from './task.composition';

it('should render with the correct role graphics-document', () => {
  const { getByRole } = render(<BasicTask />);
  const rendered = getByRole('graphics-document');
  expect(rendered).toBeTruthy();
});
