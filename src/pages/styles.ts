import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  height: 100dvh;
  width: 100dvw;
`;

export const Top = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
  gap: 20px;
  background-color: #9c575d;
`;

export const Background = styled.div`
  display: flex;
  flex: 1;
  background-color: purple;
  background-image: linear-gradient(
    to right bottom,
    #720707,
    #710a11,
    #700e19,
    #6e131f,
    #6b1725
  );
  padding: 20px;
  gap: 20px;

  button {
    width: 80px;
    height: 80px;
    padding: 20px;

    border: none;
    background-color: transparent;

    &:hover {
      outline: 1px solid pink;
    }

    svg {
      width: 100%;
      height: 100%;
      color: #fff;
    }
  }
`;
