import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCardDetails } from '../redux/actions';
import { useParams } from 'react-router-dom';
import {
  CardDetailsContainer,
CardImage,
CardName,
CardInfo,
CardStats,
AttackList,
AttackItem
} from './CardDetailsPage.styles';
import Tilt from 'react-parallax-tilt';

const CardDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const card = useSelector((state) => state.pokemon.cardDetails[id]);
  const [cardData, setCardData] = useState({})
  

  useEffect(() => {
    if (!card) {
      dispatch(fetchCardDetails(id));
    }
  }, [dispatch, id, card]);

  useEffect(() => {
    if(card){
      setCardData(card.data)
    }
  }, [card])

  if (!card) return <p>Loading...</p>;

  return (
    <CardDetailsContainer>
      {cardData.images ? (
       <Tilt><CardImage src={cardData.images.large} alt={cardData.name} /></Tilt> 
      ) : (
        <p>No image available</p>
      )}
      <div>
        <CardName>{cardData.name}</CardName>
        <CardInfo>ID: {card.id}</CardInfo>
        <CardInfo>Types: {cardData.types ? cardData.types.join(', ') : 'Unknown'}</CardInfo>
        <CardStats>
          <CardInfo>Resistances: {cardData.resistances ? cardData.resistances.map(r => r.type).join(', ') : 'None'}</CardInfo>
          <CardInfo>Weaknesses: {cardData.weaknesses ? cardData.weaknesses.map(w => w.type).join(', ') : 'None'}</CardInfo>
        </CardStats>
        <h2>Attacks</h2>
        <AttackList>
          {cardData.attacks ? cardData.attacks.map((attack, index) => (
            <AttackItem key={index} onClick={() => alert(`Attack Details:\nName: ${attack.name}\nCost: ${attack.cost.join(', ')}\nDamage: ${attack.damage}\nDescription: ${attack.text}`)}>
              {attack.name}
            </AttackItem>
          )) : <p>No attacks available</p>}
        </AttackList>
      </div>
    </CardDetailsContainer>
  );
};

export default CardDetailsPage;
