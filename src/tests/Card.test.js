import React from 'react';
import { render } from '@testing-library/react';
import Card from '../components/Card';

test('renders card component with props', () => {
  const card = { id: 'xy7-54', name: 'Pikachu', types: ['Electric'], images: { small: 'url/to/image' } };
  const { getByText, getByAltText } = render(<Card card={card} />);

  expect(getByText(/Pikachu/i)).toBeInTheDocument();
  expect(getByAltText(/Pikachu/i)).toBeInTheDocument();
  expect(getByText(/ID: xy7-54/i)).toBeInTheDocument();
  expect(getByText(/Type: Electric/i)).toBeInTheDocument();
});