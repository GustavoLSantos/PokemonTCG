import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCardDetails } from '../redux/actions';
import { useParams, useNavigate } from 'react-router-dom';
import './CardDetailsPage.styles.scss'; 
import Tilt from 'react-parallax-tilt';
import Header from '../components/Header';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Type from "../components/Type";
import LoadingSpinner from '../components/LoadingSpinner';
import { IconButton, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

const CardDetailsPage = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const card = useSelector((state) => state.pokemon.cardDetails[id]);
  const [cardData, setCardData] = useState({});
  const [open, setOpen] = useState(false);
  const [selectedAttack, setSelectedAttack] = useState(null);

  useEffect(() => {
    if (!card) {
      dispatch(fetchCardDetails(id));
    }
  }, [dispatch, id, card]);

  useEffect(() => {
    if (card) {
      setCardData(card.data);
    }
  }, [card]);

  const handleClickOpen = (attack) => {
    setSelectedAttack(attack);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedAttack(null);
  };

  if (!card) return <LoadingSpinner />;

  return (
    <>
      <Header />
      <div className="BackButtonContainer">
        <IconButton onClick={() => navigate('/')}>
          <ArrowBackIcon />
        </IconButton>
      </div>
      <div className="CardDetailsContainer">
        {cardData.images ? (
          <Tilt><img className="CardImage" src={cardData.images.large} alt={cardData.name} /></Tilt>
        ) : (
          <p>{t('no_image_available')}</p>
        )}
        <div className="CardData">
          <h1 className="CardName">{cardData.name}</h1>
          <p className="CardInfo">{t('id')}: {cardData.id}</p>
          <p className="CardInfo"><Type>{cardData.types ? cardData.types.join(', ') : 'Unknown'}</Type></p>
          <div className="CardStats">
            <p className="CardInfo"><strong className="StrongText">{t('resistances')}: </strong><Type>{cardData.resistances ? cardData.resistances.map(r => r.type).join(', ') : t('none')}</Type></p>
            <p className="CardInfo"><strong className="StrongText">{t('weaknesses')}: </strong><Type>{cardData.weaknesses ? cardData.weaknesses.map(w => w.type).join(', ') : t('none')}</Type></p>
          </div>
          <h2>{t('attacks')}</h2>
          <ul className="AttackList">
            {cardData.attacks ? cardData.attacks.map((attack, index) => (
              <li className="AttackItem" key={index} onClick={() => handleClickOpen(attack)}>
                {attack.name}
              </li>
            )) : <p>{t('no_attacks_available')}</p>}
          </ul>
        </div>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{t('attack_details')}</DialogTitle>
        <DialogContent>
          {selectedAttack && (
            <>
              <DialogContentText><strong>{t('name')}: </strong>{selectedAttack.name}</DialogContentText>
              <DialogContentText><strong>{t('cost')}: </strong>{selectedAttack.convertedEnergyCost}</DialogContentText>
              <DialogContentText><strong>{t('damage')}: </strong>{selectedAttack.damage}</DialogContentText>
              <DialogContentText><strong>{t('description')}: </strong>{selectedAttack.text}</DialogContentText>
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            {t('close')}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CardDetailsPage;
