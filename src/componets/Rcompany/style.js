import styled from "styled-components";

export const FormCompany = styled.div`
  h1 {
    margin:2rem;
    text-align: center;
  }
  form {
    display: flex;
    align-items: center;
    gap:1rem;
    flex-direction: column;
    label {
      display: flex;
      flex-direction: column;
    }
    input {
      border-radius: 5px;
      border:1px solid gray;
      height: 20px;
      width:300px;
    }
    button {
      width: 300px;
      height: 40px;
      background-color: #a0f9a0;
      border: none;
      border-radius: 5px;
      font-weight:bold;
      cursor:pointer;
      transition:0.8s;
      &:hover {
        background-color: #20ff90;
      }
    }
  }
`