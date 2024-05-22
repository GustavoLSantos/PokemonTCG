import styled from 'styled-components';

export const HomePageContainer = styled.div`
  padding: 20px;
  font-family: "Montserrat", sans-serif;
`;

export const SearchInput = styled.input`
  width: 99%;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 16px;
  background-color: #ccc;
  border: 1px solid #ccc;
  font-family: "Montserrat", sans-serif;
  border-radius: 12px;
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  font-family: "Montserrat", sans-serif;
`;

export const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
`

export const Logo = styled.img`
    width: 300px;
`
