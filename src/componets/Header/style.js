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
  position:relative;
  margin-top:1rem;
  span {
    font-size: 4rem;
    color: #447fc4;
    font-weight: 500;
    position: absolute;
    right:34rem;
    &{
      animation: ${spin} 3s infinite;
    }
  }
`;
