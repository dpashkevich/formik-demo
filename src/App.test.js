import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the login form', () => {
  render(<App />);
  expect(screen.getByText(/Please log in/i)).toBeInTheDocument()
  expect(screen.getByText(/Email/i)).toBeInTheDocument()
  expect(screen.getByText(/Password/i)).toBeInTheDocument()
  expect(screen.getByRole('button', {name: /Log in/i})).toBeInTheDocument()
});
