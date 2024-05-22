import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import {thunk} from 'redux-thunk';
import { MemoryRouter } from 'react-router-dom';
import HomePage from '../HomePage';

jest.mock('../../components/Card', () => {
  return jest.fn(({ card }) => (
    <div>
      <img src={card.images.small} alt={card.name} />
      <h3>{card.name}</h3>
      <p>ID: {card.id}</p>
    </div>
  ));
});

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('HomePage', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      pokemon: {
        cards: [
          { id: '1', name: 'Pikachu', images: { small: 'pikachu-small.jpg' } },
          { id: '2', name: 'Charmander', images: { small: 'charmander-small.jpg' } },
        ],
        loading: false,
        error: null,
      },
    });
  });

  test('renders HomePage with header and search input', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <HomePage />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByPlaceholderText(/Search Pokemon/i)).toBeInTheDocument();
    expect(screen.getByText(/Pikachu/i)).toBeInTheDocument();
    expect(screen.getByText(/Charmander/i)).toBeInTheDocument();
  });

  test('filters cards based on search input', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <HomePage />
        </MemoryRouter>
      </Provider>
    );

    fireEvent.change(screen.getByPlaceholderText(/Search Pokemon/i), {
      target: { value: 'Pika' },
    });

    expect(screen.getByText(/Pikachu/i)).toBeInTheDocument();
    expect(screen.queryByText(/Charmander/i)).toBeNull();
  });

  test('displays loading spinner when loading', () => {
    store = mockStore({
      pokemon: {
        cards: [],
        loading: true,
        error: null,
      },
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <HomePage />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  });

  test('displays error message on error', () => {
    store = mockStore({
      pokemon: {
        cards: [],
        loading: false,
        error: { message: 'Failed to fetch cards' },
      },
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <HomePage />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Error loading cards/i)).toBeInTheDocument();
    expect(screen.getByText(/Failed to fetch cards/i)).toBeInTheDocument();
  });
});
