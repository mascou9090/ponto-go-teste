import styled, { keyframes } from "styled-components";

const spin = keyframes`
      from {
        transform: rotateY(0deg);
      }
      to {
        transform: rotateY(360deg);
      }
`;

export const HeaderS = styled.header`
  display: flex;
  justify-content: center;
  color: #229fc4;
  font-weight: 100;
  margin-top:1rem;
  span {
    font-size: 4rem;
    color: #447fc4;
    font-weight: 500;
    &{
      animation: ${spin} 3s infinite;
    }
  }
`;

export const Div = styled.div`
  display: flex;
  justify-content: center;
`;