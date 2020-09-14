import React from "react";

export default function () {
  const [dotPosition, setDotPosition] = React.useState({ x: 3, y: 3 });
  const [dotScore, setDotScore] = React.useState(0);

  const deployDot = (snakeArray) => {
    let randomPos = {};
    do {
      randomPos = {
        x: Math.ceil(Math.random() * 20),
        y: Math.ceil(Math.random() * 20),
      };
    } while (
      snakeArray.find(
        // eslint-disable-next-line no-loop-func
        (element) => JSON.stringify(element) === JSON.stringify(randomPos)
      )
    );
    setDotPosition(randomPos);
  };

  const score = () => {
    setDotScore((prev) => prev + 1);
  };

  const resetScore = () => {
    setDotScore(0);
  };

  React.useEffect(() => {
    document.title = `Score: ${dotScore}`;
  }, [dotScore]);

  return { score, deployDot, dotPosition: dotPosition, resetScore };
}
