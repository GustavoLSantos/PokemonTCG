import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCards } from '../redux/actions';
import Card from '../components/Card';
import './HomePage.styles.scss';
import Header from "../components/Header";
import LoadingSpinner from "../components/LoadingSpinner";
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import useMediaQuery from '@mui/material/useMediaQuery';

const HomePage = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { cards, loading, error } = useSelector((state) => state.pokemon);
  const [searchTerm, setSearchTerm] = useState('');
  const isMobile = useMediaQuery('(max-width: 600px)');

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  const filteredCards = cards
    .filter(card =>
      card.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  if (loading) return <LoadingSpinner />;
  if (error) return <p>{t('error_loading_cards', { error: error.message })}</p>;

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false
  };

  return (
    <div className="HomePageContainer">
      <Header />
      <input
        className="SearchInput"
        type="text"
        placeholder={t('search_placeholder')}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {isMobile ? (
        <Slider {...settings}>
          {filteredCards.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </Slider>
      ) : (
        <div className="CardGrid">
          {filteredCards.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
