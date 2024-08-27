"use client";

import { useEffect, useState } from "react";
import * as S from "./styles";

const specialKeys = ["Shift", "Control", "Alt"];
const initialText = "hello Im the text that you have to type!";

interface Props {
  minimize: () => void;
}

export function Terminal({ minimize }: Props) {
  const storedPosition = localStorage.getItem("position");
  const initialPosition = storedPosition
    ? JSON.parse(storedPosition)
    : { x: 0, y: 0 };
  const firstLetter = initialText.charAt(0);
  const restOfText = initialText.substring(1);

  const [canType, setCanType] = useState(false);
  const [points, setPoints] = useState(0);
  const [missType, setMissType] = useState(false);

  const [textToType, setTextToType] = useState(restOfText);
  const [nextLetter, setNextLetter] = useState(firstLetter);
  const [typedText, setTypedText] = useState("");

  const [canMove, setCanMove] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState(initialPosition);

  useEffect(() => {
    function handleMouse(e) {
      const { movementX, movementY, buttons } = e;

      if (canMove && buttons === 1) {
        setIsDragging(true);

        setPosition((cur) => {
          const { x, y } = cur;

          const newX = x + movementX;
          const newY = y + movementY;

          return {
            x: newX,
            y: newY,
          };
        });
      } else {
        setIsDragging(false);
      }
    }

    window.addEventListener("mousemove", handleMouse);

    return () => window.removeEventListener("mousemove", handleMouse);
  });

  useEffect(() => {
    localStorage.setItem("position", JSON.stringify(position));
  }, [isDragging]);

  function handleKeyUp(event) {
    const { key } = event.nativeEvent;

    if (!specialKeys.includes(key)) {
      if (key === nextLetter) {
        setTextToType((cur) => {
          const curString = cur.split("");

          setNextLetter(curString.shift());

          return curString.join("");
        });

        setTypedText((cur) => cur + key);

        setPoints((cur) => cur + 1);
        setMissType(false);
      } else {
        setMissType(true);

        setPoints((cur) => cur - 1);
      }
    }
  }

  return (
    <S.Main style={{ top: position.y, left: position.x }}>
      <S.Window htmlFor="test" $canType={canType}>
        <S.WindowTop
          $canType={canType}
          onMouseEnter={() => setCanMove(true)}
          onMouseLeave={() => !isDragging && setCanMove(false)}
        >
          <h2 className="title">terminal</h2>
          <button className="minimize-box" onClick={minimize}>
            -
          </button>
        </S.WindowTop>

        <S.WindowHeader>
          <p>file</p>
          <p>edit</p>
        </S.WindowHeader>

        <S.WindowText>
          <h3>cash: ${points},00</h3>
          <p>
            <strong className="success">
              {typedText}
              <span className="text-cursor"> </span>
            </strong>
            <strong className={missType ? "danger" : "untyped"}>
              {nextLetter === " " ? " " : nextLetter}
            </strong>
            <strong className="untyped">{textToType}</strong>
          </p>
        </S.WindowText>

        <S.TextareaField
          id="test"
          name="test"
          onFocus={() => setCanType(true)}
          onBlur={() => setCanType(false)}
          onKeyUp={handleKeyUp}
          readOnly
        ></S.TextareaField>
      </S.Window>
    </S.Main>
  );
}
