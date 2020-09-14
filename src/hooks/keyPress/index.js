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

  function handleButton(e) {
    console.log(e.touches[0].pageX);
    console.log(window.innerWidth);
    if (queue.current) {
      if (e.touches[0].pageX > window.innerWidth / 2) {
        if (direction.current === "UP") {
          direction.current = "RIGHT";
        } else if (direction.current === "RIGHT") {
          direction.current = "DOWN";
        } else if (direction.current === "DOWN") {
          direction.current = "LEFT";
        } else if (direction.current === "LEFT") {
          direction.current = "UP";
        }
      } else {
        if (direction.current === "UP") {
          direction.current = "LEFT";
        } else if (direction.current === "LEFT") {
          direction.current = "DOWN";
        } else if (direction.current === "DOWN") {
          direction.current = "RIGHT";
        } else if (direction.current === "RIGHT") {
          direction.current = "UP";
        }
      }
      queue.current = false;
    }
  }

  const resetQueue = () => {
    queue.current = true;
  };

  const resetDirection = () => {
    direction.current = "RIGHT";
    queue.current = false;
  };

  // Add event listeners
  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("touchstart", handleButton, false);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("touchstart", handleButton, false);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return {
    pressedDirection: direction.current,
    resetQueue,
    resetDirection,
  };
}
