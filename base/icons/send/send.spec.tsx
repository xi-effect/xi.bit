import React from 'react';
import { render } from '@testing-library/react';
import { BasicSend } from './send.composition';

it('should render with the correct role graphics-document', () => {
  const { getByRole } = render(<BasicSend />);
  const rendered = getByRole('graphics-document');
  expect(rendered).toBeTruthy();
});
