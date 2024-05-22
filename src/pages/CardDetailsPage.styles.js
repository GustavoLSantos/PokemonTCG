import styled from 'styled-components';


export const CardDetailsContainer = styled.div`
  padding: 5% 25%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  font-family: "Montserrat", sans-serif;
`;

export const CardImage = styled.img`
  max-width: 300px;
  border-radius: 8px;
  margin: 20px;
`;

export const CardName = styled.h1`
  font-size: 2rem;
  margin-bottom: 10px;
`;

export const CardInfo = styled.p`
  font-size: 1rem;
  margin: 5px 0;
`;

export const CardStats = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
`;

export const AttackList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 20px 0;
  width: 100%;
`;

export const AttackItem = styled.li`
  border-radius: 12px;
  background-color: #ccc;
  padding: 10px;
  margin: 10px 0;
  cursor: pointer;

  &:hover {
    background-color: #e8e8e8;
  }
`;