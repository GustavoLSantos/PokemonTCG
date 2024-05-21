import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCardDetails } from '../redux/actions';

const CardDetailsPage = ({ match }) => {
  const dispatch = useDispatch();
  const cardId = match.params.id;
  const card = useSelector((state) => state.pokemon.cardDetails[cardId]);

  useEffect(() => {
    if (!card) {
      dispatch(fetchCardDetails(cardId));
    }
  }, [dispatch, cardId, card]);

  if (!card) return <p>Loading...</p>;

  return (
    <div className="card-details">
      <img src={card.images.large} alt={card.name} />
      <h1>{card.name}</h1>
      <p>ID: {card.id}</p>
      <p>Types: {card.types.join(', ')}</p>
      <p>Resistances: {card.resistances ? card.resistances.map(r => r.type).join(', ') : 'None'}</p>
      <p>Weaknesses: {card.weaknesses ? card.weaknesses.map(w => w.type).join(', ') : 'None'}</p>
      <h2>Attacks</h2>
      <ul>
        {card.attacks.map((attack, index) => (
          <li key={index}>
            <button onClick={() => alert(`Attack Details:\nName: ${attack.name}\nCost: ${attack.cost.join(', ')}\nDamage: ${attack.damage}\nDescription: ${attack.text}`)}>
              {attack.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardDetailsPage;