import styled from "styled-components";

export const ButtonAddPoint = styled.button`
  width: 160px;
  height: 40px;
  margin: 2rem;
  background-color: red;
  color: white;
  border-radius: 4px;
  transition: 0.5s;
  cursor: pointer;
  &:hover {
    box-shadow: 2px 2px 5px black;
    background-color: #b1daca;
  }
`;
export const ButtonShowPoint = styled(ButtonAddPoint)`
  background-color: blueviolet;
`;
export const ComponentPoint = styled.div`
  display: flex;
  justify-content: center;
  inline-size: block;
`;

export const DivShow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition:2s;
  ul {
    list-style: none;
    li {
      margin:1rem;
    }
  }
`;
