import styled from 'styled-components';

export const MainS = styled.main`
  display: flex;
  justify-content: space-around;
  margin-top: 15rem;
  a {
    text-decoration: none;
  }
  @media (max-width:900px) {
    align-items: center;
    flex-direction: column;
    margin:5rem;
    padding:1rem;
  }
`;
export const BoxCompany = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border:0.2px solid #aaa;
  width:18rem;
  height:10rem;
  background-color: #B4EBCA;
  border-radius: 0.8rem;
  transition: 0.5s;
  cursor: pointer;
  font-size: 2rem;
  color:blue;
  margin:1rem;
  &:hover {
    box-shadow: 2px 2px 5px black;
    background-color: #b1daCa;
  }
`;
export const BoxEmployees = styled(BoxCompany)`
  background-color: #D9F2B4;
  &:hover {
    background-color: #e9f2B4;
  }
`;