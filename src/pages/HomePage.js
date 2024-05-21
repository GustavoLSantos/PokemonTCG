import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCards } from '../redux/actions';
import Card from '../components/Card';

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
    <div>
      <input
        type="text"
        placeholder="Search Pokemon"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="card-grid">
        {filteredCards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;