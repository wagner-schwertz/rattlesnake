import React, { useState, useEffect } from "react";
import { Grid, Div } from "./styles";
import useDirectionKey from "../../hooks/keyPress";
import useSnake from "../../hooks/snake";
import useDot from "../../hooks/dot";
import GameOver from "./gameOver";

const checkSelfCollision = (positionArray) => {
  return positionArray
    .slice(1, positionArray.length - 1)
    .find(
      (element) =>
        element.x === positionArray[0].x && element.y === positionArray[0].y
    );
};

const checkDotCollision = (headPosition, dotPosition) => {
  return headPosition.x === dotPosition.x && headPosition.y === dotPosition.y;
};

export default function Grd() {
  const [gameState, setGameState] = useState("RUNNING");
  const gameSpeed = React.useRef(100);
  const { pressedDirection, resetQueue } = useDirectionKey();
  const { position, move, grow } = useSnake();
  const { score, deployDot, dotPosition } = useDot();

  // first time loading
  useEffect(() => {
    deployDot(position);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      move(pressedDirection);
      resetQueue(); //avoid two keystrokes during one move cycle
      //check for collision with itself
      if (checkSelfCollision(position)) {
        setGameState("DEFEAT");
      }
      //check for collision with dot and score
      if (checkDotCollision(position[0], dotPosition)) {
        score();
        grow();
        deployDot(position);
        gameSpeed.current -= 2;
      }
    }, gameSpeed.current);
    return () => {
      clearTimeout(timer);
    };
  });

  if (gameState !== "DEFEAT") {
    return (
      <Grid>
        <Div x={dotPosition.x} y={dotPosition.y} />
        {position.map((segment) => (
          <Div x={segment.x} y={segment.y} />
        ))}
      </Grid>
    );
  }

  if (gameState === "DEFEAT") {
    return <GameOver />;
  }
}
