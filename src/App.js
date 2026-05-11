import { useState } from 'react';
import './App.css';

function App() {
  const [answer, setAnswer] = useState("");
  const [show, setShow] = useState(false);
  const [analyse, setAnalyse] = useState("");


  const showw = () => {
    setAnalyse("Analysing your answer");

    let dots = 0;

    const interval = setInterval(() => {
      dots++;

      setAnalyse("Analysing your answer" + ".".repeat(dots));

      if (dots >= 10) {
        clearInterval(interval);

        setTimeout(() => {
          setShow(true);
        }, 500);
      }
    }, 300);
  };

  return (
    <div id="bd">
      <img src='assets/download.jpg' alt='hello'></img>
      <div id="big">
        <div id="question">Why are you gay?</div>

        <input
          type="text"
          id="answer"
          placeholder="Answer here"
          onChange={(e) => {
            setAnswer(e.target.value);
            setAnalyse("");
            setShow(false)
          }}
        />

        <button
          id="verify"
          onClick={() => {
            if (answer.trim() !== "") {
              showw();
            }
          }}
        >
          Verify
        </button>
      </div>

      <div id="show">
        <div id="ans">{analyse}</div>

        {show && (
          <div id="real">
            The truth is that you're <strong>Gay</strong>.
            <br></br>
            <div style={{marginTop: "20px", color:"#929293"}}>And you have nothing to do about it.</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;