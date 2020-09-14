import { useRef, useEffect } from "react";

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

  function handleClick(e) {
    const rel = { x: e.x / window.innerWidth, y: e.y / window.innerHeight };
    if (queue.current) {
      if (rel.x < rel.y) {
        if (rel.x < 1 - rel.y) {
          if (direction.current !== "RIGHT") {
            direction.current = "LEFT";
          }
        } else {
          if (direction.current !== "UP") {
            direction.current = "DOWN";
          }
        }
      } else {
        if (rel.y < 1 - rel.x) {
          if (direction.current !== "DOWN") {
            direction.current = "UP";
          }
        } else {
          if (direction.current !== "LEFT") {
            direction.current = "RIGHT";
          }
        }
      }
    }
    queue.current = false;
  }

  const resetQueue = () => {
    queue.current = true;
  };

  // Add event listeners
  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("click", handleClick);
    window.addEventListener("touchstart", handleClick);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("click", handleClick);
      window.removeEventListener("touchstart", handleClick);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return { pressedDirection: direction.current, resetQueue };
}
