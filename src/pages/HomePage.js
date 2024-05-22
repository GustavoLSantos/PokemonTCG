import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCards } from '../redux/actions';
import Card from '../components/Card';
import {
  HomePageContainer,
  SearchInput,
  CardGrid,
  Logo,
  LogoContainer
} from "./HomePage.styles";
import PokemonLogo from "../assets/pokemonLogo.png";

const HomePage = () => {
  const dispatch = useDispatch();
  const { cards, loading, error } = useSelector((state) => state.pokemon);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  const filteredCards = cards.filter(card =>
    card.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading cards: {error.message}</p>;

  return (
    <HomePageContainer>
      <LogoContainer>
        <Logo src={PokemonLogo}/>
      </LogoContainer>
      <SearchInput
        type="text"
        placeholder="Search Pokemon"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <CardGrid>
        {filteredCards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </CardGrid>
    </HomePageContainer>
  );
};

export default HomePage;
