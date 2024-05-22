import { getPokemonCards, getPokemonCardDetails } from '../services/pokemonService';
import { FETCH_CARD_DETAILS_SUCCESS, FETCH_CARD_DETAILS_FAILURE } from './actionTypes';

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
    const response = await fetch(`https://api.pokemontcg.io/v2/cards/${id}`);
    const data = await response.json();
    console.log("!@# data", data.data)
    dispatch({ type: FETCH_CARD_DETAILS_SUCCESS, payload: { id, data: data.data } });
  } catch (error) {
    dispatch({ type: FETCH_CARD_DETAILS_FAILURE, payload: error });
  }
};
