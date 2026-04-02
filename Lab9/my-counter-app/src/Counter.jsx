import { useState, useEffect, useRef } from "react";
import "./styles.css";
import {
  INITIAL_COUNT,
  increment,
  decrement,
  reset,
  addToHistory,
} from "./counterUtils.js";

export default function Counter() {
  const [count,   setCount]   = useState(INITIAL_COUNT);
  const [bump,    setBump]     = useState(false);
  const [history, setHistory] = useState([]);
  const timerRef = useRef(null);

  const triggerBump = () => {
    setBump(true);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setBump(false), 150);
  };

  const handleIncrement = () => {
    setCount((prev) => increment(prev));
    setHistory((prev) => addToHistory(prev, "inc"));
    triggerBump();
  };

  const handleDecrement = () => {
    setCount((prev) => decrement(prev));
    setHistory((prev) => addToHistory(prev, "dec"));
    triggerBump();
  };

  const handleReset = () => {
    setCount(reset());
    setHistory([]);
  };

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <div className="wrapper">
      <div className="card">

        <div className="card-header">
          <span className="eyebrow">Counter</span>
          <button className="reset-btn" onClick={handleReset}>
            Reset
          </button>
        </div>

        <div className="counter-section">
          <div
            className={`counter-display ${bump ? "bump" : ""} ${count < 0 ? "negative" : ""}`}
          >
            {count}
          </div>
          <p className="counter-label">Current Value</p>
        </div>

        <div className="controls">
          <button className="ctrl-btn decrement" onClick={handleDecrement}>
            <span className="btn-symbol">−</span>
            <span className="btn-label">Decrement</span>
          </button>

          <button className="ctrl-btn increment" onClick={handleIncrement}>
            <span className="btn-symbol">+</span>
            <span className="btn-label">Increment</span>
          </button>
        </div>

        <div className="card-footer">
          <span className="history-label">History</span>
          <div className="history-dots">
            {history.length === 0 ? (
              <span style={{ fontSize: "10px", color: "var(--text-dim)", letterSpacing: "0.1em" }}>
                No actions yet
              </span>
            ) : (
              history.map((type, i) => (
                <div key={i} className={`history-dot ${type}`} />
              ))
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
