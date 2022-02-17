import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/React/i);
  const testElement = screen.getByText(/React Test/i);
  expect(linkElement).toBeInTheDocument();
  expect(testElement).toBeInTheDocument();
});
