import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";
import { useRef } from "react";

function App() {
  return (
    <div className="container">
      <OTPLogin />
    </div>
  );
}

function OTPLogin() {
  const [flag, setFlag] = useState(true);

  return (
    <div className="box">
      <h1>Login via OTP</h1>
      {flag ? (
        <EnterNumber setFlag={setFlag} />
      ) : (
        <EnterOTP setFlag={setFlag} />
      )}
    </div>
  );
}

function EnterNumber({ setFlag }) {
  return (
    <div>
      <input type="text" placeholder="Enter your mobile number" /> <br /> <br />
      <button
        onClick={() => {
          setFlag((f) => !f);
        }}
      >
        Send OTP
      </button>
    </div>
  );
}

function EnterOTP({ setFlag }) {
  const inputRef1 = useRef();
  const inputRef2 = useRef();
  const inputRef3 = useRef();
  const inputRef4 = useRef();

  const goToNext = (ref) => {
    ref.current.focus();
  };

  useEffect(() => {
    inputRef1.current.focus();
  }, [inputRef1]);

  return (
    <div>
      <input
        ref={inputRef1}
        onChange={() => goToNext(inputRef2)}
        className="otp-input"
        type="text"
      />{" "}
      <input
        ref={inputRef2}
        onChange={() => goToNext(inputRef3)}
        className="otp-input"
        type="text"
      />{" "}
      <input
        ref={inputRef3}
        onChange={() => goToNext(inputRef4)}
        className="otp-input"
        type="text"
      />{" "}
      <input ref={inputRef4} className="otp-input" type="text" />
      <br /> <br />
      <button
        onClick={() => {
          setFlag((f) => !f);
        }}
      >
        Login
      </button>
    </div>
  );
}

export default App;
