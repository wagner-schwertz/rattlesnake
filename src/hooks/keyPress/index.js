import React, { useState, useEffect, useRef } from "react";

export default function LastPressedKey() {
  // State for keeping track of whether key is pressed
  const direction = useRef("RIGHT");
  const queue = useRef(true);

  // If pressed key is our target key then set to true
  function downHandler(e) {
    e.preventDefault();
    if (queue.current) {
      if (e.keyCode === 37 && direction.current !== "RIGHT") {
        direction.current = "LEFT";
      } else if (e.keyCode === 38 && direction.current !== "DOWN") {
        direction.current = "UP";
      }
      if (e.keyCode === 39 && direction.current !== "LEFT") {
        direction.current = "RIGHT";
      }
      if (e.keyCode === 40 && direction.current !== "UP") {
        direction.current = "DOWN";
      }
      queue.current = false;
    }
  }

  const resetQueue = () => {
    queue.current = true;
  };

  // Add event listeners
  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    // Remove event listeners on cleanup
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return { pressedDirection: direction.current, resetQueue };
}
