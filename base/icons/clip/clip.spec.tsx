import React from 'react';
import { render } from '@testing-library/react';
import { BasicClip } from './clip.composition';

it('should render with the correct role graphics-document', () => {
  const { getByRole } = render(<BasicClip />);
  const rendered = getByRole('graphics-document');
  expect(rendered).toBeTruthy();
});
