import { Terminal } from "components";
import { useState } from "react";
import { createPortal } from "react-dom";
import { SiGnometerminal } from "react-icons/si";
import * as S from "./styles";

function Home() {
  const [showTerminal, setShowTerminal] = useState(false);

  return (
    <S.Main>
      <S.Top>
        <p>
          <strong>M T R X</strong>
        </p>
        <p>system</p>
        <p>edit</p>
      </S.Top>

      <S.Background>
        <button onClick={() => setShowTerminal((cur) => !cur)}>
          <SiGnometerminal />
        </button>
      </S.Background>

      {showTerminal &&
        createPortal(
          <Terminal minimize={() => setShowTerminal(false)} />,
          document.body,
        )}
    </S.Main>
  );
}

export default Home;
