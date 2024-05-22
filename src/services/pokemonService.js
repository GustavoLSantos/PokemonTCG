import axios from 'axios';

const API_URL = 'https://api.pokemontcg.io/v2/cards';

export const getPokemonCards = async () => {
  try {
    const response = await axios.get(API_URL, {
      params: { pageSize: 100 }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching Pokemon cards:', error);
    throw error;
  }
};

export const getPokemonCardDetails = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching Pokemon card details:', error);
    throw error;
  }
};