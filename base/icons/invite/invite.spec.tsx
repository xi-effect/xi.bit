import React from 'react';
import { render } from '@testing-library/react';
import { BasicInvite } from './invite.composition';

it('should render with the correct role graphics-document', () => {
  const { getByRole } = render(<BasicInvite />);
  const rendered = getByRole('graphics-document');
  expect(rendered).toBeTruthy();
});
