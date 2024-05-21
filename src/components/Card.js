import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ card }) => (
  <div className="card">
    <Link to={`/card/${card.id}`}>
      <img src={card.images.small} alt={card.name} />
      <h3>{card.name}</h3>
      <p>ID: {card.id}</p>
      <p>Type: {card.types.join(', ')}</p>
    </Link>
  </div>
);

export default Card;