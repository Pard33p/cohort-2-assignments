import { useState, useRef } from "react";
import "./App.css";
import { useMemo } from "react";

const samplePara = "This is a sample para";

function App() {
  const [paraCount, setParaCount] = useState(0);
  const [showParas, setShowParas] = useState(false);

  const paragraphs = useMemo(() => {
    const paras = [];
    for (let i = 0; i < paraCount; i++) {
      paras.push(samplePara);
    }
    return paras;
  }, [paraCount]);

  return (
    <>
      <h1>Para Generator</h1>
      <input
        type="text"
        placeholder="Enter number of words"
        onChange={(e) => {
          setShowParas(false);
          setParaCount(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setShowParas(true);
        }}
      >
        Generate
      </button>

      {showParas &&
        paragraphs.map((para) => {
          return <p>{para}</p>;
        })}
    </>
  );
}

export default App;
