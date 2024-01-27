import { useState, useRef } from "react";
import "./App.css";
import { useMemo } from "react";

const samplePara = "This is a sample para";

function App() {
  const [paraCount, setParaCount] = useState(0);

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
          setParaCount(e.target.value);
        }}
      />
      {/* <button onClick={() => setParaCount(countTemp)}>Generate</button> */}

      {paragraphs.map((para) => {
        return <p>{para}</p>;
      })}
    </>
  );
}

export default App;
