import React from 'react';
import { render } from '@testing-library/react';
import { BasicFile } from './file.composition';

it('should render with the correct role graphics-document', () => {
  const { getByRole } = render(<BasicFile />);
  const rendered = getByRole('graphics-document');
  expect(rendered).toBeTruthy();
});
