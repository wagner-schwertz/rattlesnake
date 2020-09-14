import React, { useState, useEffect, useRef } from "react";
import { Grid, Div } from "./styles";
import gameOverText from "../../utils/gameovercharmap";

const Toggler = () => {
  const [on, setOn] = useState(false);
  const toggle = () => {
    setOn((prev) => !prev);
  };
  return { on: on, toggle };
};

export default function () {
  const { on, toggle } = Toggler();

  useEffect(() => {
    const timer = setInterval(() => {
      toggle();
    }, 300);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Grid>
      {on &&
        gameOverText.map((element) => <Div x={element[0]} y={element[1]} />)}
    </Grid>
  );
}
