import { render, screen } from '@testing-library/react';
import App from './App';

test('testing title list product', () => {
  render(<App />);
  const linkElement = screen.getByText(/List Products/i);
  expect(linkElement).toBeInTheDocument();
});
