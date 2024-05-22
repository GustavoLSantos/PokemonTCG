import React from 'react';
import { useNavigate } from "react-router-dom";
import './Card.styles.scss';
import Tilt from 'react-parallax-tilt';
import Type from "../components/Type";

const Card = ({ card }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/card/${card.id}`);
  }

  return (
    <div className="CardContainer" onClick={handleNavigate}>
      <Tilt>
        <img className="CardImage" src={card.images.small} alt={card.name} />
      </Tilt>
      <h3 className="CardTitle">{card.name}</h3>
      <p className="CardInfo">ID: {card.id}</p>
      {card.types.map((type) => (
        <p className="CardInfo"><Type key={type}>{type}</Type></p>
      ))}
    </div>
  );
}

export default Card;
