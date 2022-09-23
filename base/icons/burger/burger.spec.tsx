import React from 'react';
import { render } from '@testing-library/react';
import { BasicBurger } from './burger.composition';

it('should render with the correct role graphics-document', () => {
  const { getByRole } = render(<BasicBurger />);
  const rendered = getByRole('graphics-document');
  expect(rendered).toBeTruthy();
});

