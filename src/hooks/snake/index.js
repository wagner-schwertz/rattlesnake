import React from "react";

export default function () {
  const [didCatch, setDidCatch] = React.useState(false);
  const [position, setPosition] = React.useState([
    { x: 5, y: 10 },
    { x: 4, y: 10 },
    { x: 3, y: 10 },
    { x: 2, y: 10 },
  ]);

  const move = (direction) => {
    let delta = { x: 0, y: 0 };
    let newPosition = { x: 0, y: 0 };
    switch (direction) {
      case "UP":
        delta = { x: 0, y: -1 };
        break;
      case "DOWN":
        delta = { x: 0, y: 1 };
        break;
      case "LEFT":
        delta = { x: -1, y: 0 };
        break;
      case "RIGHT":
        delta = { x: 1, y: 0 };
        break;
      default:
        break;
    }
    newPosition = { x: position[0].x + delta.x, y: position[0].y + delta.y };
    //check for boundary wrap
    if (newPosition.x === 21) {
      newPosition.x = 1;
    }
    if (newPosition.x === 0) {
      newPosition.x = 20;
    }
    if (newPosition.y === 21) {
      newPosition.y = 1;
    }
    if (newPosition.y === 0) {
      newPosition.y = 20;
    }
    //check if snake did catch the dot to adjust the array length
    if (!didCatch) {
      setPosition((prev) => [newPosition, ...prev.slice(0, prev.length - 1)]);
    } else {
      setPosition((prev) => [newPosition, ...prev]);
      setDidCatch(false);
    }
  };

  const grow = () => {
    setDidCatch(true);
  };

  const resetSnake = () => {
    setDidCatch(false);
    setPosition([
      { x: 5, y: 10 },
      { x: 4, y: 10 },
      { x: 3, y: 10 },
      { x: 2, y: 10 },
    ]);
  };

  return { position, move, grow, resetSnake };
}

// import React from "react";

// export default function () {
//   const position = React.useRef([
//     { x: 2, y: 10 },
//     { x: 3, y: 10 },
//     { x: 4, y: 10 },
//     { x: 5, y: 10 },
//   ]);

//   const move = (direction) => {
//     let delta = { x: 0, y: 0 };
//     switch (direction) {
//       case "UP":
//         delta = { x: 0, y: -1 };
//         break;
//       case "DOWN":
//         delta = { x: 0, y: 1 };
//         break;
//       case "LEFT":
//         delta = { x: -1, y: 0 };
//         break;
//       case "RIGHT":
//         delta = { x: 1, y: 0 };
//         break;
//       default:
//         break;
//     }
//     position.current.pop();
//     position.current.unshift({
//       x: position.current[0].x + delta.x,
//       y: position.current[0].y + delta.y,
//     });
//     if (position.current[0].x === 21) {
//       position.current[0].x = 1;
//     }
//     if (position.current[0].x === -1) {
//       position.current[0].x = 20;
//     }
//     if (position.current[0].y === 21) {
//       position.current[0].y = 1;
//     }
//     if (position.current[0].y === -1) {
//       position.current[0].y = 20;
//     }
//   };

//   return { position: position.current, move };
// }
