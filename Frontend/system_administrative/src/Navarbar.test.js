import React from 'react';
import { render } from '@testing-library/react';
import Navarbar from './components/NavBar/Navarbar';

test.skip('renders learn react link', () => {
  const { getByText } = render(<Navarbar />);
  const linkElement = getByText(/Tabolu/i);
  expect(linkElement).toBeInTheDocument();
});