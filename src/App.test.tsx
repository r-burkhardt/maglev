import React from 'react';
import {render, screen} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import App from './App';

test('renders Maglev Library header', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const headerElement = screen.getByRole('heading', {
    level: 2,
    name: /Maglev Library/i,
  });
  expect(headerElement).toBeInTheDocument();
});
