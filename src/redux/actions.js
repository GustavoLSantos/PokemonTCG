import { getPokemonCards, getPokemonCardDetails } from '../services/pokemonService';

export const fetchCards = () => async (dispatch) => {
  dispatch({ type: 'FETCH_CARDS_REQUEST' });
  try {
    const data = await getPokemonCards();
    dispatch({ type: 'FETCH_CARDS_SUCCESS', payload: data.data });
  } catch (error) {
    dispatch({ type: 'FETCH_CARDS_FAILURE', error });
  }
};

export const fetchCardDetails = (id) => async (dispatch) => {
  try {
    const data = await getPokemonCardDetails(id);
    dispatch({ type: 'FETCH_CARD_DETAILS_SUCCESS', payload: data.data });
  } catch (error) {
    console.error('Error fetching card details:', error);
  }
};