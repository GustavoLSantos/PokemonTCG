import styled from 'styled-components';

export const CardContainer = styled.div`
  padding: 10px;
  border-radius: 8px;
  text-align: center;
  transition: transform 0.2s;
  

  &:hover {
    transform: scale(1.05);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

export const CardTitle = styled.h3`
  margin: 10px 0;
  font-size: 18px;
  text-decoration: none;
  color: black;
`;

export const CardInfo = styled.p`
  margin: 5px 0;
  font-size: 14px;
`;