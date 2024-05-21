const initialState = {
    cards: [],
    cardDetails: {},
    loading: false,
    error: null,
  };
  
  const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_CARDS_REQUEST':
        return { ...state, loading: true };
      case 'FETCH_CARDS_SUCCESS':
        return { ...state, loading: false, cards: action.payload };
      case 'FETCH_CARDS_FAILURE':
        return { ...state, loading: false, error: action.error };
      case 'FETCH_CARD_DETAILS_SUCCESS':
        return { ...state, cardDetails: { ...state.cardDetails, [action.payload.id]: action.payload } };
      default:
        return state;
    }
  };
  
  export default pokemonReducer;