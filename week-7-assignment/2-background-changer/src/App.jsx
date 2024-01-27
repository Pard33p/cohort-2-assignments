import { useRef } from "react";
import "./App.css";

const colors = ["red", "black", "green", "yellow", "purple", "blue"];

function App() {
  const containerRef = useRef();

  const changeColor = (color) => {
    containerRef.current.style.backgroundColor = color;
  };

  return (
    <div ref={containerRef} className="container">
      <div className="controller">
        {colors.map((color) => {
          return (
            <button
              className="button"
              onClick={() => changeColor(color)}
              style={{ backgroundColor: color }}
            >
              {`${color.charAt(0).toUpperCase()}${color.slice(1)}`}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default App;
