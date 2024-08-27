import styled from "styled-components";

export const Main = styled.div`
  position: absolute;
  background-color: #33323283;
`;

export const Window = styled.label<{ $canType: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 600px;
  height: 400px;

  border: 4px solid blue;
  border-top: none;

  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */

  ${({ $canType }) =>
    $canType ? "border-color: #292967;" : "border-color: #272727;"}
`;

export const WindowTop = styled.div<{ $canType: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 40px;
  background-color: red;
  padding: 0 2px;

  ${({ $canType }) =>
    $canType ? "background-color: #292967;" : "background-color: #272727;"}

  .title {
    font-size: 20px;
  }

  .minimize-box {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid lightgray;
    width: 28px;
    height: 24px;
    background-color: gray;
    cursor: pointer;

    font-size: 34px;

    &:hover {
      border: 2px solid darkgray;
    }
  }
`;

export const WindowHeader = styled.div`
  display: flex;
  background-color: gray;
  width: 100%;
  padding: 4px 8px;
  gap: 14px;
  color: #000;
  text-shadow: 1px 1px lightgray;
`;

export const WindowText = styled.div`
  display: flex;
  flex-direction: column-reverse;
  flex: 1;
  width: 100%;
  padding: 20px;

  background-color: #010a06;
  color: #037341;

  * {
    font-family: "Courier New", Courier, monospace;
    font-weight: 900;
    font-size: 20px;
  }

  .success {
    color: #037341;
  }

  .danger {
    color: #bb1a1a;
  }

  .next-type {
    color: #7a2977;
  }

  .untyped {
    color: gray;
  }

  .text-cursor {
    display: inline-block;
    width: 0;
    height: 18px;
    margin-bottom: -3px;
    outline: 1px solid white;
    animation: glow 1s infinite alternate;
  }

  @keyframes glow {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const TextareaField = styled.textarea`
  width: 0;
  height: 0;
  border: 0;
  opacity: 0;
`;
