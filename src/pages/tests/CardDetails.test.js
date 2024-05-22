import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import CardDetailsPage from '../CardDetailsPage';
import rootReducer from '../../redux/pokemonReducer';
import '@testing-library/jest-dom';

const mockCardDetails = {
  data: {
    id: 'test-id',
    name: 'Pikachu',
    images: {
      large: 'test-image-url'
    },
    types: ['Fire'],
    resistances: [{ type: 'Water' }],
    weaknesses: [{ type: 'Rock' }],
    attacks: [
      {
        name: 'Test Attack',
        convertedEnergyCost: 2,
        damage: '50',
        text: 'Test attack description'
      }
    ]
  }
};

const mockFetchCardDetails = (id) => {
  return (dispatch) => {
    return Promise.resolve({
      type: 'FETCH_CARD_DETAILS_SUCCESS',
      payload: { id, data: mockCardDetails.data }
    }).then((action) => dispatch(action));
  };
};

const configureMockStore = (initialState) => {
  const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
  store.dispatch = jest.fn(store.dispatch);
  return store;
};

const initialState = {
  pokemon: {
    cardDetails: {
      'test-id': mockCardDetails
    }
  }
};

describe('CardDetailsPage', () => {
  let store;

  beforeEach(() => {
    store = configureMockStore(initialState);
  });

  test('dispatches fetchCardDetails action if card data is not present', async () => {
    const emptyState = {
      pokemon: {
        cardDetails: {}
      }
    };
    store = configureMockStore(emptyState);

    render(
      <Provider store={store}>
        <Router>
          <CardDetailsPage />
        </Router>
      </Provider>
    );

    await mockFetchCardDetails('test-id')(store.dispatch);
    expect(store.dispatch).toHaveBeenCalledWith({
      type: 'FETCH_CARD_DETAILS_SUCCESS',
      payload: { id: 'test-id', data: mockCardDetails.data }
    });
  });
});
