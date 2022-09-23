import React from 'react';
import { render } from '@testing-library/react';
import { BasicHome } from './home.composition';

it('should render with the correct role graphics-document', () => {
  const { getByRole } = render(<BasicHome />);
  const rendered = getByRole('graphics-document');
  expect(rendered).toBeTruthy();
});
