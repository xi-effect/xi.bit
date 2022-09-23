import React from 'react';
import { render } from '@testing-library/react';
import { BasicAnnounce } from './announce.composition';

it('should render with the correct role graphics-document', () => {
  const { getByRole } = render(<BasicAnnounce />);
  const rendered = getByRole('graphics-document');
  expect(rendered).toBeTruthy();
});
