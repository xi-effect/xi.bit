import React from 'react';
import { render } from '@testing-library/react';
import { BasicChat } from './chat.composition';

it('should render with the correct role graphics-document', () => {
  const { getByRole } = render(<BasicChat />);
  const rendered = getByRole('graphics-document');
  expect(rendered).toBeTruthy();
});
