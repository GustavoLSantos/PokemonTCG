import React from 'react';
import { useNavigate } from "react-router-dom";
import {
  CardContainer,
  CardImage,
  CardTitle,
  CardInfo,
} from './Card.styles';
import Tilt from 'react-parallax-tilt';

const Card = ({ card }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/card/${card.id}`)
  }

  return (
    <CardContainer onClick={handleNavigate}>
        <Tilt>
          <CardImage src={card.images.small} alt={card.name} />
        </Tilt>
        <CardTitle>{card.name}</CardTitle>
        <CardInfo>ID: {card.id}</CardInfo>
        <CardInfo>Type: {card.types.join(', ')}</CardInfo>
    </CardContainer>
  );

}


export default Card;
